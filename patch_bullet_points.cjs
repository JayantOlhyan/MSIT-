const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DynamicPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldStr = `                                            {pageData.bulletPoints.map((point, i) => {
                                                const isLink = typeof point === 'object' && point.url;
                                                const labelText = typeof point === 'object' ? point.label : point;
                                                
                                                const isActiveFeeTab = slug === 'online-fee' && (
                                                    (labelText.includes('Payment') && activeFeeTab === 'pay') ||
                                                    (labelText.includes('Receipt') && activeFeeTab === 'receipt') ||
                                                    (labelText.includes('Refund') && activeFeeTab === 'refund')
                                                );
                                                
                                                const isActiveEventTab = slug === 'events' && (
                                                    (labelText.includes('Avensis') && activeEventTab === 'avensis') ||
                                                    (labelText.includes('Genesis') && activeEventTab === 'genesis') ||
                                                    (labelText.includes('Sports') && activeEventTab === 'sports')
                                                );

                                                const isActive = isActiveFeeTab || isActiveEventTab;

                                                return (
                                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                                        <ArrowRight className={\`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-colors \${isActive ? 'text-accent' : 'text-slate-500'}\`} />
                                                        {isLink ? (
                                                            <Link to={point.url} className="hover:text-accent transition-colors">
                                                                {point.label}
                                                            </Link>
                                                        ) : (
                                                            <span 
                                                                className={\`hover:text-accent transition-colors cursor-pointer w-full \${isActive ? 'text-accent font-bold font-sans' : ''}\`}
                                                                dangerouslySetInnerHTML={{ __html: labelText }}
                                                                onClick={() => {
                                                                    if (slug === 'online-fee') {
                                                                        if (labelText.includes('Payment')) setActiveFeeTab('pay');
                                                                        else if (labelText.includes('Receipt')) setActiveFeeTab('receipt');
                                                                        else if (labelText.includes('Refund')) setActiveFeeTab('refund');
                                                                    } else if (slug === 'events') {
                                                                        if (labelText.includes('Avensis')) setActiveEventTab('avensis');
                                                                        else if (labelText.includes('Genesis')) setActiveEventTab('genesis');
                                                                        else if (labelText.includes('Sports')) setActiveEventTab('sports');
                                                                    }
                                                                }}
                                                            ></span>
                                                        )}
                                                    </li>
                                                );
                                            })}`;

const newStr = `                                            {pageData.bulletPoints.map((point, i) => {
                                                const isLink = typeof point === 'object' && point.url;
                                                const labelText = typeof point === 'object' ? point.label : point;
                                                const detailText = typeof point === 'object' ? point.detail : null;
                                                
                                                const isActiveFeeTab = slug === 'online-fee' && (
                                                    (labelText.includes('Payment') && activeFeeTab === 'pay') ||
                                                    (labelText.includes('Receipt') && activeFeeTab === 'receipt') ||
                                                    (labelText.includes('Refund') && activeFeeTab === 'refund')
                                                );
                                                
                                                const isActiveEventTab = slug === 'events' && (
                                                    (labelText.includes('Avensis') && activeEventTab === 'avensis') ||
                                                    (labelText.includes('Genesis') && activeEventTab === 'genesis') ||
                                                    (labelText.includes('Sports') && activeEventTab === 'sports')
                                                );

                                                const isActive = isActiveFeeTab || isActiveEventTab || activeHighlightIndex === i;

                                                return (
                                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                                        <ArrowRight className={\`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-colors \${isActive ? 'text-accent' : 'text-slate-500'}\`} />
                                                        {isLink ? (
                                                            <Link to={point.url} className="hover:text-accent transition-colors">
                                                                {point.label}
                                                            </Link>
                                                        ) : (
                                                            <div className="flex flex-col w-full">
                                                                <span 
                                                                    className={\`hover:text-accent transition-colors cursor-pointer w-full \${isActive ? 'text-accent font-bold font-sans' : ''}\`}
                                                                    dangerouslySetInnerHTML={{ __html: labelText }}
                                                                    onClick={() => {
                                                                        if (slug === 'online-fee') {
                                                                            if (labelText.includes('Payment')) setActiveFeeTab('pay');
                                                                            else if (labelText.includes('Receipt')) setActiveFeeTab('receipt');
                                                                            else if (labelText.includes('Refund')) setActiveFeeTab('refund');
                                                                        } else if (slug === 'events') {
                                                                            if (labelText.includes('Avensis')) setActiveEventTab('avensis');
                                                                            else if (labelText.includes('Genesis')) setActiveEventTab('genesis');
                                                                            else if (labelText.includes('Sports')) setActiveEventTab('sports');
                                                                        } else if (detailText) {
                                                                            setActiveHighlightIndex(activeHighlightIndex === i ? null : i);
                                                                        }
                                                                    }}
                                                                ></span>
                                                                {detailText && activeHighlightIndex === i && (
                                                                    <div className="mt-2 text-slate-400 text-xs leading-relaxed animate-fade-in">
                                                                        {detailText}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                );
                                            })}`;

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated bullet points rendering in DynamicPage.jsx');
} else {
    console.error('Could not find the target string to replace.');
}
