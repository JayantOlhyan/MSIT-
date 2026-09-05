const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DynamicPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldClick = `                                                                    onClick={() => {
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
                                                                    }}`;

const newClick = `                                                                    onClick={() => {
                                                                        if (slug === 'online-fee') {
                                                                            if (labelText.includes('Payment')) setActiveFeeTab('pay');
                                                                            else if (labelText.includes('Receipt')) setActiveFeeTab('receipt');
                                                                            else if (labelText.includes('Refund')) setActiveFeeTab('refund');
                                                                        } else if (slug === 'events') {
                                                                            if (labelText.includes('Avensis')) setActiveEventTab('avensis');
                                                                            else if (labelText.includes('Genesis')) setActiveEventTab('genesis');
                                                                            else if (labelText.includes('Sports')) setActiveEventTab('sports');
                                                                        }
                                                                        
                                                                        if (detailText) {
                                                                            setActiveHighlightIndex(activeHighlightIndex === i ? null : i);
                                                                        }
                                                                    }}`;

if (content.includes(oldClick)) {
    content = content.replace(oldClick, newClick);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated click logic');
} else {
    console.error('Could not find the target click string to replace.');
}
