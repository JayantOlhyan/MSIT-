const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* CAMPUS VIRTUAL TOUR \*\/\}\s*<section className="py-32 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center text-center">[\s\S]*?<\/section>/;

const replacement = `                    </div>
                    
                    {/* Integrated Campus Tour CTA */}
                    <div className="mt-16 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">Want to explore every corner?</h3>
                        <p className="text-slate-600 mb-8 max-w-lg relative z-10">Take a fully immersive virtual tour of our 8-storey academic block, reading halls, and recreational grounds.</p>
                        <Link to="/virtual-tour" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                            <Play className="w-4 h-4" />
                            Start Virtual Tour
                        </Link>
                    </div>
                </div>
            </section>`;

if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/pages/Home.jsx', content, 'utf8');
    console.log("Successfully merged sections.");
} else {
    console.log("Regex did not match.");
}
