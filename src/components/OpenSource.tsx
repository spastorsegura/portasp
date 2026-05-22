"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Package, Star, Download } from 'lucide-react';

interface PackageStat {
    downloads: string;
    stars: string;
}

const OpenSource = () => {
    const packages = [
        {
            name: "qrlayout-core",
            desc: "A powerful core logic library for QR layout generation, handling the complex calculations for sizing and positioning.",
            url: "https://www.npmjs.com/package/qrlayout-core",
            tags: ["TypeScript", "QR Code", "Layout Engine"],
            created: "2025-12-31",
            repo: "shashi089/qr-code-layout-generate-tool",
            defaultStats: { downloads: "2,366", stars: "29" }
        },
        {
            name: "qrlayout-ui",
            desc: "Framework-agnostic UI component library for qrlayout-core. Works seamlessly with React, Vue, Angular, or vanilla JavaScript.",
            url: "https://www.npmjs.com/package/qrlayout-ui",
            tags: ["JavaScript", "Framework Agnostic", "UI Components"],
            created: "2026-01-08",
            repo: "shashi089/qr-code-layout-generate-tool",
            defaultStats: { downloads: "1,474", stars: "29" }
        },
        {
            name: "env-drift-check",
            desc: "A CLI tool to detect drift between .env.example / .env.template and your actual .env files, ensuring environment consistency.",
            url: "https://www.npmjs.com/package/env-drift-check",
            tags: ["CLI", "DevOps", "Config"],
            created: "2026-01-27",
            repo: "shashi089/env-drift-check",
            defaultStats: { downloads: "1,338", stars: "14" }
        }
    ];

    const [stats, setStats] = useState<Record<string, PackageStat>>({
        "qrlayout-core": { downloads: "2,366", stars: "29" },
        "qrlayout-ui": { downloads: "1,474", stars: "29" },
        "env-drift-check": { downloads: "1,338", stars: "14" }
    });

    useEffect(() => {
        const fetchStats = async () => {
            const today = new Date().toISOString().split('T')[0];

            const getChunks = (startDateStr: string, endDateStr: string) => {
                const start = new Date(startDateStr);
                const end = new Date(endDateStr);
                const chunks = [];
                let currentStart = new Date(start);
                while (currentStart < end) {
                    const currentEnd = new Date(currentStart);
                    currentEnd.setFullYear(currentEnd.getFullYear() + 1);
                    if (currentEnd > end) {
                        chunks.push({
                            start: currentStart.toISOString().split('T')[0],
                            end: end.toISOString().split('T')[0]
                        });
                        break;
                    } else {
                        chunks.push({
                            start: currentStart.toISOString().split('T')[0],
                            end: currentEnd.toISOString().split('T')[0]
                        });
                        currentStart = new Date(currentEnd);
                        currentStart.setDate(currentStart.getDate() + 1);
                    }
                }
                return chunks;
            };

            const updatedStats = { ...stats };
            let hasChanges = false;

            // Fetch GitHub stars in parallel
            const repoStarsMap: Record<string, string> = {};
            const uniqueRepos = Array.from(new Set(packages.map(pkg => pkg.repo)));
            await Promise.all(uniqueRepos.map(async (repo) => {
                try {
                    const response = await fetch(`https://api.github.com/repos/${repo}`);
                    const data = await response.json();
                    if (data.stargazers_count !== undefined) {
                        repoStarsMap[repo] = String(data.stargazers_count);
                    }
                } catch (error) {
                    console.error(`Error fetching GitHub stars for ${repo}:`, error);
                }
            }));

            // Fetch NPM downloads in parallel
            await Promise.all(packages.map(async (pkg) => {
                try {
                    const chunks = getChunks(pkg.created, today);
                    const results = await Promise.all(chunks.map(chunk => 
                        fetch(`https://api.npmjs.org/downloads/point/${chunk.start}:${chunk.end}/${pkg.name}`)
                            .then(r => r.json())
                    ));
                    const totalDownloads = results.reduce((sum, r) => sum + (r.downloads || 0), 0);
                    
                    let newDownloads = stats[pkg.name]?.downloads;
                    if (totalDownloads > 0) {
                        newDownloads = new Intl.NumberFormat().format(totalDownloads);
                    }

                    const fetchedStars = repoStarsMap[pkg.repo] || stats[pkg.name]?.stars;

                    if (stats[pkg.name]?.downloads !== newDownloads || stats[pkg.name]?.stars !== fetchedStars) {
                        updatedStats[pkg.name] = {
                            downloads: newDownloads,
                            stars: fetchedStars
                        };
                        hasChanges = true;
                    }
                } catch (error) {
                    console.error(`Error fetching stats for ${pkg.name}:`, error);
                }
            }));

            if (hasChanges) {
                setStats(updatedStats);
            }
        };

        fetchStats();
    }, []);

    return (
        <section id="opensource" aria-label="Open Source Contributions" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Package className="text-violet-500 w-6 h-6" />
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Open Source
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Contributing to the developer community with powerful tools and libraries.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => (
                        <motion.a
                            key={index}
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 group-hover:text-violet-300 transition-colors">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                                    {pkg.name}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {pkg.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pkg.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-800 font-medium">
                                    <span className="flex items-center gap-1">
                                        <Download className="w-3 h-3" /> {(stats[pkg.name] || pkg.defaultStats).downloads}
                                    </span>
                                    <span className="flex items-center gap-1 group-hover:text-yellow-500/80 transition-colors">
                                        <Star className="w-3 h-3" /> {(stats[pkg.name] || pkg.defaultStats).stars}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
