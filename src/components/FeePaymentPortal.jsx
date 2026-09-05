import React, { useState } from 'react';
import { 
    CreditCard, 
    Landmark, 
    CheckCircle, 
    Download, 
    Printer, 
    ShieldCheck, 
    Receipt, 
    RefreshCw, 
    Loader2, 
    ArrowLeft, 
    ArrowRight,
    Sparkles
} from 'lucide-react';

const DEPARTMENTS = [
    { code: 'cse', name: 'Computer Science & Engineering' },
    { code: 'it', name: 'Information Technology' },
    { code: 'ece', name: 'Electronics & Communication Engineering' },
    { code: 'eee', name: 'Electrical & Electronics Engineering' },
    { code: 'applied-sciences', name: 'Applied Sciences (1st Year)' }
];

const FEE_TYPES = [
    { id: 'tuition', name: 'Tuition Fee', amount: 120000 },
    { id: 'hostel', name: 'Hostel Fee', amount: 85000 },
    { id: 'misc', name: 'Miscellaneous Fee', amount: 5000 }
];

const MOCK_RECEIPTS_DB = {
    "00115002720": [
        { id: "REC-2026-9812", date: "2026-08-10", type: "Tuition Fee", term: "Semester 7", amount: 120000, status: "SUCCESS" },
        { id: "REC-2025-4519", date: "2025-07-22", type: "Tuition Fee", term: "Semester 5", amount: 115000, status: "SUCCESS" },
        { id: "REC-2025-1102", date: "2025-08-01", type: "Hostel Fee", term: "Annual", amount: 80000, status: "SUCCESS" },
        { id: "REC-2024-8841", date: "2024-07-15", type: "Tuition Fee", term: "Semester 3", amount: 110000, status: "SUCCESS" }
    ],
    "00215002720": [
        { id: "REC-2026-9901", date: "2026-08-12", type: "Tuition Fee", term: "Semester 5", amount: 120000, status: "SUCCESS" },
        { id: "REC-2025-3312", date: "2025-07-28", type: "Tuition Fee", term: "Semester 3", amount: 115000, status: "SUCCESS" }
    ]
};

const FeePaymentPortal = ({ activeTab, setActiveTab }) => {
    // Payment Tab States
    const [step, setStep] = useState(1); // 1: Info, 2: Gateway, 3: Processing, 4: Success
    const [formData, setFormData] = useState({
        enrollmentNo: '',
        studentName: '',
        email: '',
        department: 'cse',
        semester: 'Semester 1',
        feeType: 'tuition',
        customAmount: '120000',
        paymentMethod: 'card'
    });
    
    // Gateway States
    const [cardData, setCardData] = useState({ number: '', expiry: '', cvv: '', name: '' });
    const [upiId, setUpiId] = useState('');
    const [selectedBank, setSelectedBank] = useState('HDFC');
    const [processingMsg, setProcessingMsg] = useState('Initiating payment gateway...');
    const [successDetails, setSuccessDetails] = useState(null);

    // Receipt Tab States
    const [receiptSearchNo, setReceiptSearchNo] = useState('');
    const [receiptResults, setReceiptResults] = useState(null);
    const [viewingReceipt, setViewingReceipt] = useState(null);

    // Handle Active Tab Sync from Parent
    const currentTab = activeTab || 'pay';

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (name === 'feeType') {
            const selectedFee = FEE_TYPES.find(f => f.id === value);
            setFormData(prev => ({
                ...prev,
                feeType: value,
                customAmount: selectedFee ? selectedFee.amount.toString() : prev.customAmount
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        // Validation: Enrollment Number should be exactly 11 digits
        if (!/^\d{11}$/.test(formData.enrollmentNo)) {
            alert("Enrollment number must be exactly 11 digits.");
            return;
        }
        setStep(2);
    };

    const triggerPaymentSimulation = () => {
        setStep(3);
        setProcessingMsg('Connecting to secure banking host...');
        
        setTimeout(() => {
            setProcessingMsg('Verifying enrollment and transaction credentials...');
        }, 1200);

        setTimeout(() => {
            setProcessingMsg('Authorizing payment and generating digital token...');
        }, 2400);

        setTimeout(() => {
            const transactionId = `TXN-${Date.now().toString().slice(-8)}-${Math.floor(1000 + Math.random() * 9000)}`;
            const today = new Date().toISOString().split('T')[0];
            const finalAmount = parseInt(formData.customAmount);
            
            const newTxn = {
                id: transactionId,
                date: today,
                type: FEE_TYPES.find(f => f.id === formData.feeType)?.name || formData.feeType,
                term: formData.semester,
                amount: finalAmount,
                status: "SUCCESS",
                enrollmentNo: formData.enrollmentNo,
                studentName: formData.studentName,
                department: DEPARTMENTS.find(d => d.code === formData.department)?.name || formData.department,
                email: formData.email,
                paymentMethod: formData.paymentMethod.toUpperCase()
            };

            // Save to mock database dynamically so it can be generated in tab 2
            if (!MOCK_RECEIPTS_DB[formData.enrollmentNo]) {
                MOCK_RECEIPTS_DB[formData.enrollmentNo] = [];
            }
            MOCK_RECEIPTS_DB[formData.enrollmentNo].unshift(newTxn);

            setSuccessDetails(newTxn);
            setStep(4);
        }, 4000);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        if (formData.paymentMethod === 'card') {
            if (!cardData.number || !cardData.expiry || !cardData.cvv || !cardData.name) {
                alert("Please fill in all card details.");
                return;
            }
        } else if (formData.paymentMethod === 'upi') {
            if (!upiId.includes('@')) {
                alert("Please enter a valid UPI ID (e.g. name@bank).");
                return;
            }
        }
        triggerPaymentSimulation();
    };

    const handleReceiptSearch = (e) => {
        e.preventDefault();
        if (!/^\d{11}$/.test(receiptSearchNo)) {
            alert("Enrollment number must be exactly 11 digits.");
            return;
        }

        const results = MOCK_RECEIPTS_DB[receiptSearchNo] || [];
        setReceiptResults(results);
    };

    const triggerPrint = () => {
        window.print();
    };

    return (
        <div className="w-full">
            {/* Tab Navigation header within the component */}
            <div className="flex border-b border-slate-200 mb-8 select-none print:hidden">
                <button 
                    type="button"
                    onClick={() => { setActiveTab('pay'); setStep(1); }}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 ${
                        currentTab === 'pay' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <CreditCard className="w-4 h-4" />
                    Pay Tuition Fees
                </button>
                <button 
                    type="button"
                    onClick={() => { setActiveTab('receipt'); setViewingReceipt(null); }}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 ${
                        currentTab === 'receipt' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <Receipt className="w-4 h-4" />
                    Generate Receipt
                </button>
                <button 
                    type="button"
                    onClick={() => setActiveTab('refund')}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 ${
                        currentTab === 'refund' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <RefreshCw className="w-4 h-4" />
                    Refund Policy
                </button>
            </div>

            {/* TAB 1: PAY TUITION FEES */}
            {currentTab === 'pay' && (
                <div className="bg-slate-50/50 rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-xs transition-all duration-300 print:hidden">
                    {/* STEP 1: INFO FORM */}
                    {step === 1 && (
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-5 h-5 text-blue-500" />
                                <h3 className="text-xl font-bold text-slate-900">Student & Fee Details</h3>
                            </div>
                            <form onSubmit={handleInfoSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Enrollment Number (11 Digits)</label>
                                        <input 
                                            type="text" 
                                            name="enrollmentNo"
                                            value={formData.enrollmentNo}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="e.g. 00115002720"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Student Full Name</label>
                                        <input 
                                            type="text" 
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="Enter student name"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="campus@student.msit.in"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Department / Branch</label>
                                        <select 
                                            name="department"
                                            value={formData.department}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white text-slate-800 text-sm font-medium"
                                        >
                                            {DEPARTMENTS.map(dept => (
                                                <option key={dept.code} value={dept.code}>{dept.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Current Semester</label>
                                        <select 
                                            name="semester"
                                            value={formData.semester}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white text-slate-800 text-sm font-medium"
                                        >
                                            {[...Array(8)].map((_, i) => (
                                                <option key={i} value={`Semester ${i + 1}`}>Semester {i + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Fee Category</label>
                                        <select 
                                            name="feeType"
                                            value={formData.feeType}
                                            onChange={handleFormChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white text-slate-800 text-sm font-medium"
                                        >
                                            {FEE_TYPES.map(fee => (
                                                <option key={fee.id} value={fee.id}>{fee.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Amount to Pay (INR)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3 text-slate-500 font-semibold">₹</span>
                                        <input 
                                            type="text" 
                                            name="customAmount"
                                            value={formData.customAmount}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-100 text-slate-800 text-sm font-bold cursor-not-allowed"
                                            readOnly
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-2 font-medium">Standard GGSIPU pre-determined fee structure for {formData.semester}.</p>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 mt-4 cursor-pointer text-sm"
                                >
                                    Proceed to Payment
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    )}

                    {/* STEP 2: GATEWAY/METHOD SELECT */}
                    {step === 2 && (
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <button type="button" onClick={() => setStep(1)} className="p-1 hover:bg-slate-200 rounded-lg transition-colors mr-2">
                                    <ArrowLeft className="w-4 h-4 text-slate-600" />
                                </button>
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <h3 className="text-xl font-bold text-slate-900">Secure Payment Gateway</h3>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6 flex justify-between items-center text-xs">
                                <div>
                                    <span className="text-slate-500 font-medium">Enrollment No:</span> <strong className="text-slate-700">{formData.enrollmentNo}</strong>
                                    <span className="mx-2 font-medium text-slate-400">|</span>
                                    <span className="text-slate-500 font-medium">Payee:</span> <strong className="text-slate-700">{formData.studentName}</strong>
                                </div>
                                <div className="text-right">
                                    <span className="text-slate-500 font-medium">Total:</span> <strong className="text-blue-700 text-sm font-extrabold">₹{parseInt(formData.customAmount).toLocaleString('en-IN')}</strong>
                                </div>
                            </div>

                            <form onSubmit={handlePaymentSubmit} className="space-y-6">
                                <div className="grid grid-cols-3 gap-3">
                                    <button 
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                                            formData.paymentMethod === 'card' 
                                                ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-xs' 
                                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        <span className="text-xs font-bold">Card</span>
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'upi' }))}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                                            formData.paymentMethod === 'upi' 
                                                ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-xs' 
                                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span className="text-xs font-bold">UPI</span>
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'netbanking' }))}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                                            formData.paymentMethod === 'netbanking' 
                                                ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-xs' 
                                                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        <Landmark className="w-5 h-5" />
                                        <span className="text-xs font-bold">Net Banking</span>
                                    </button>
                                </div>

                                {/* CARD DETAILS */}
                                {formData.paymentMethod === 'card' && (
                                    <div className="space-y-4 border border-slate-200 bg-white p-6 rounded-2xl">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Card Number</label>
                                            <input 
                                                type="text" 
                                                placeholder="4532 •••• •••• 9812"
                                                maxLength={16}
                                                required
                                                value={cardData.number}
                                                onChange={e => setCardData({...cardData, number: e.target.value.replace(/\D/g, '')})}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Expiry Date</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="MM/YY"
                                                    maxLength={5}
                                                    required
                                                    value={cardData.expiry}
                                                    onChange={e => setCardData({...cardData, expiry: e.target.value})}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">CVV</label>
                                                <input 
                                                    type="password" 
                                                    placeholder="•••"
                                                    maxLength={3}
                                                    required
                                                    value={cardData.cvv}
                                                    onChange={e => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Cardholder Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="Name as on Card"
                                                required
                                                value={cardData.name}
                                                onChange={e => setCardData({...cardData, name: e.target.value})}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* UPI DETAILS */}
                                {formData.paymentMethod === 'upi' && (
                                    <div className="space-y-4 border border-slate-200 bg-white p-6 rounded-2xl">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">UPI ID (VPA)</label>
                                            <input 
                                                type="text" 
                                                placeholder="studentname@okicici"
                                                required
                                                value={upiId}
                                                onChange={e => setUpiId(e.target.value)}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* NET BANKING */}
                                {formData.paymentMethod === 'netbanking' && (
                                    <div className="space-y-4 border border-slate-200 bg-white p-6 rounded-2xl">
                                        <div>
                                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Select Bank</label>
                                            <select 
                                                value={selectedBank}
                                                onChange={e => setSelectedBank(e.target.value)}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-800 text-sm font-medium"
                                            >
                                                <option value="HDFC">HDFC Bank</option>
                                                <option value="ICICI">ICICI Bank</option>
                                                <option value="SBI">State Bank of India</option>
                                                <option value="AXIS">Axis Bank</option>
                                                <option value="PNB">Punjab National Bank</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 cursor-pointer text-sm"
                                >
                                    Authorize Payment (₹{parseInt(formData.customAmount).toLocaleString('en-IN')})
                                </button>
                            </form>
                        </div>
                    )}

                    {/* STEP 3: TRANSACTION SIMULATION LOADER */}
                    {step === 3 && (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Processing Secure Transaction</h4>
                            <p className="text-sm text-slate-500 font-light max-w-sm mb-4">Please do not refresh the page or click back.</p>
                            <div className="px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                                <span className="text-xs font-bold text-slate-600">{processingMsg}</span>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: SUCCESS SUMMARY */}
                    {step === 4 && successDetails && (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Payment Successful!</h3>
                            <p className="text-sm text-slate-500 font-light mb-8 max-w-md mx-auto">Your payment has been processed securely. An official receipt has been generated and dispatched to your email address.</p>
                            
                            <div className="max-w-md mx-auto bg-white border border-slate-200 p-6 rounded-2xl text-left text-xs mb-8 space-y-3">
                                <div className="flex justify-between pb-2 border-b border-slate-100 font-bold text-slate-400 uppercase tracking-wider">
                                    <span>Detail</span>
                                    <span>Value</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Student Name:</span>
                                    <strong className="text-slate-800">{successDetails.studentName}</strong>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Enrollment No:</span>
                                    <strong className="text-slate-800">{successDetails.enrollmentNo}</strong>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Branch:</span>
                                    <strong className="text-slate-800">{successDetails.department}</strong>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Payment Category:</span>
                                    <strong className="text-slate-800">{successDetails.type} ({successDetails.term})</strong>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Transaction ID:</span>
                                    <strong className="text-blue-600 font-mono">{successDetails.id}</strong>
                                </div>
                                <div className="flex justify-between border-t border-slate-100 pt-3">
                                    <span className="text-slate-600 font-bold">Total Paid:</span>
                                    <strong className="text-blue-600 text-sm font-extrabold">₹{successDetails.amount.toLocaleString('en-IN')}</strong>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setViewingReceipt(successDetails);
                                        setActiveTab('receipt');
                                    }}
                                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                                >
                                    <Receipt className="w-4 h-4" />
                                    View Detailed Receipt
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setStep(1);
                                        setFormData({
                                            enrollmentNo: '',
                                            studentName: '',
                                            email: '',
                                            department: 'cse',
                                            semester: 'Semester 1',
                                            feeType: 'tuition',
                                            customAmount: '120000',
                                            paymentMethod: 'card'
                                        });
                                    }}
                                    className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                                >
                                    Make Another Payment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 2: GENERATE RECEIPT */}
            {currentTab === 'receipt' && (
                <div>
                    {!viewingReceipt ? (
                        <div className="bg-slate-50/50 rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-xs transition-all duration-300 print:hidden">
                            <div className="flex items-center gap-2 mb-6">
                                <Receipt className="w-5 h-5 text-blue-500" />
                                <h3 className="text-xl font-bold text-slate-900">Receipt Lookup</h3>
                            </div>
                            <p className="text-sm text-slate-500 font-light mb-6">
                                Enter your 11-digit University Enrollment Number to search for your payment receipts. 
                                (Tip: Use <strong>00115002720</strong> or <strong>00215002720</strong> for sample loaded historical receipts).
                            </p>

                            <form onSubmit={handleReceiptSearch} className="flex gap-4 mb-8">
                                <input 
                                    type="text" 
                                    required
                                    value={receiptSearchNo}
                                    onChange={e => setReceiptSearchNo(e.target.value)}
                                    placeholder="Enter Enrollment Number (e.g. 00115002720)"
                                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 bg-white text-slate-800 text-sm font-medium"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 rounded-xl transition-all shadow-md text-xs sm:text-sm cursor-pointer"
                                >
                                    Search Receipts
                                </button>
                            </form>

                            {receiptResults && (
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Recent Transactions found ({receiptResults.length})</h4>
                                    
                                    {receiptResults.length === 0 ? (
                                        <div className="p-8 text-center text-slate-500 font-light border-2 border-dashed border-slate-200 rounded-2xl">
                                            No payment transactions found for this Enrollment Number. Make a payment in the "Pay Tuition Fees" tab first.
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-3">
                                            {receiptResults.map((receipt, index) => (
                                                <div 
                                                    key={index} 
                                                    className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-blue-200 hover:shadow-xs transition-all"
                                                >
                                                    <div className="space-y-1">
                                                        <div className="text-xs font-extrabold text-slate-900">{receipt.type} ({receipt.term || "Annual"})</div>
                                                        <div className="text-[10px] text-slate-400 font-medium">Date: {receipt.date} | Ref: {receipt.id}</div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-sm font-extrabold text-blue-600">₹{receipt.amount.toLocaleString('en-IN')}</span>
                                                        <button 
                                                            type="button"
                                                            onClick={() => setViewingReceipt(receipt)}
                                                            className="px-3.5 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                                                        >
                                                            View Receipt
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        /* OFFICIAL DETAILED RECEIPT MOCKUP */
                        <div>
                            {/* Back and actions controls bar - HIDDEN IN PRINT */}
                            <div className="flex justify-between items-center mb-6 print:hidden">
                                <button 
                                    type="button"
                                    onClick={() => setViewingReceipt(null)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition-colors cursor-pointer"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5" /> Back to List
                                </button>
                                
                                <div className="flex gap-2">
                                    <button 
                                        type="button"
                                        onClick={triggerPrint}
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                                    >
                                        <Printer className="w-4 h-4" /> Print / Save PDF
                                    </button>
                                </div>
                            </div>

                            {/* PRINT CONTAINER WITH SPECIAL CLASS FOR CUSTOM CSS OVERRIDE */}
                            <div className="bg-white border-2 border-slate-200 p-8 sm:p-12 rounded-3xl shadow-md font-sans text-slate-800 relative overflow-hidden print:border-0 print:p-0 print:shadow-none">
                                {/* MSIT Digital Watermark / Seal in BG */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none w-96 h-96 border-[20px] border-slate-900 rounded-full flex items-center justify-center font-black text-3xl tracking-widest">
                                    MSIT NEW DELHI
                                </div>

                                {/* RECEIPT HEADER */}
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b-2 border-slate-200 pb-8 gap-6 text-center md:text-left">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY</h2>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1">Affiliated to GGSIPU | Approved by AICTE | NBA Accredited</p>
                                        <p className="text-xs text-slate-500 font-light mt-1.5">C-4, Janakpuri, New Delhi - 110058</p>
                                        <p className="text-xs text-slate-500 font-light">Email: accounts@msit.in | Web: www.msit.in</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center shrink-0 min-w-[160px]">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Transaction Status</span>
                                        <span className="px-2.5 py-0.5 mt-1 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px] uppercase tracking-wider border border-emerald-200 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> {viewingReceipt.status}
                                        </span>
                                    </div>
                                </div>

                                {/* RECEIPT DETAILS GRID */}
                                <div className="my-8">
                                    <div className="text-center font-extrabold text-base tracking-wider text-slate-900 bg-slate-50 py-2 border-y border-slate-200 mb-6 uppercase">
                                        Fee Payment Receipt
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs">
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Enrollment Number:</span>
                                            <strong className="text-slate-800 font-bold">{viewingReceipt.enrollmentNo}</strong>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Receipt Reference:</span>
                                            <strong className="text-slate-800 font-mono font-bold">{viewingReceipt.id}</strong>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Student Name:</span>
                                            <strong className="text-slate-800 font-bold">{viewingReceipt.studentName || 'Student Demo'}</strong>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Transaction Date:</span>
                                            <strong className="text-slate-800 font-bold">{viewingReceipt.date}</strong>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Course / Branch:</span>
                                            <strong className="text-slate-800 font-bold">{viewingReceipt.department || 'Computer Science & Engineering'}</strong>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 py-1.5">
                                            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Payment Method:</span>
                                            <strong className="text-slate-800 font-bold">{viewingReceipt.paymentMethod || 'UPI/ONLINE'}</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* ITEMIZED BILLING TABLE */}
                                <table className="w-full my-8 text-xs text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white uppercase text-[9px] tracking-wider font-bold">
                                            <th className="p-3 rounded-l">#</th>
                                            <th className="p-3">Particulars / Description</th>
                                            <th className="p-3 rounded-r text-right">Amount (INR)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="p-3 font-medium">1</td>
                                            <td className="p-3">
                                                <div className="font-bold text-slate-800">{viewingReceipt.type} ({viewingReceipt.term || 'Semester Fee'})</div>
                                                <div className="text-[10px] text-slate-400 font-light mt-0.5">Academic session 2026-27 admission/tuition charges.</div>
                                            </td>
                                            <td className="p-3 text-right font-extrabold text-slate-800">₹{(viewingReceipt.amount - 5000).toLocaleString('en-IN')}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-medium">2</td>
                                            <td className="p-3">
                                                <div className="font-bold text-slate-800">University Examination & Library Charges</div>
                                                <div className="text-[10px] text-slate-400 font-light mt-0.5">Annual GGSIPU registration and digital content subscription.</div>
                                            </td>
                                            <td className="p-3 text-right font-extrabold text-slate-800">₹5,000</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="border-t-2 border-slate-300 font-bold bg-slate-50">
                                            <td colSpan="2" className="p-3 text-right font-black uppercase text-[10px] tracking-wider text-slate-500">Grand Total Paid:</td>
                                            <td className="p-3 text-right font-black text-sm text-blue-700">₹{viewingReceipt.amount.toLocaleString('en-IN')}</td>
                                        </tr>
                                    </tfoot>
                                </table>

                                {/* TERMS & AUTH SIGNATURE */}
                                <div className="mt-12 flex flex-col md:flex-row justify-between items-stretch md:items-end gap-8 pt-8 border-t border-slate-200">
                                    <div className="max-w-md text-[10px] text-slate-400 font-light leading-relaxed">
                                        <span className="font-bold uppercase tracking-wider text-[9px] text-slate-500 block mb-1">Important Terms:</span>
                                        - This is a system-generated digital fee receipt and does not require a physical signature.<br />
                                        - Subject to realization of funds. False payment notifications will lead to cancellation of registration.<br />
                                        - Refer to the GGSIPU Admissions handbook for refund policy schedules.
                                    </div>
                                    <div className="text-center self-center md:self-end">
                                        <div className="w-32 h-10 border-b border-slate-400 flex items-center justify-center mx-auto mb-2 text-slate-400 italic text-xs select-none">
                                            Digitally Verified
                                        </div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Accounts Officer</div>
                                        <div className="text-[8px] text-slate-400 font-light mt-0.5">MSIT Accounts Division</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* TAB 3: REFUND POLICY */}
            {currentTab === 'refund' && (
                <div className="bg-slate-50/50 rounded-3xl border border-slate-200/60 p-6 md:p-10 shadow-xs transition-all duration-300 print:hidden">
                    <div className="flex items-center gap-2 mb-6">
                        <RefreshCw className="w-5 h-5 text-blue-500" />
                        <h3 className="text-xl font-bold text-slate-900">Fee Refund Guidelines</h3>
                    </div>

                    <p className="text-sm text-slate-500 font-light mb-8">
                        The Maharaja Surajmal Institute of Technology follows the official refund schedule aligned with the <strong>Guru Gobind Singh Indraprastha University (GGSIPU)</strong> and <strong>AICTE</strong> guidelines. Refund requests must be formally submitted via the Registrar's Office.
                    </p>

                    {/* REFUND GRID TABLE */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Refund Calculation Scale</h4>
                        
                        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                            <div className="grid grid-cols-3 bg-slate-900 text-white font-bold p-4 text-xs uppercase tracking-wider">
                                <div className="col-span-2">Deduction Criteria</div>
                                <div className="text-right">Refund Amount</div>
                            </div>
                            
                            <div className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                                <div className="grid grid-cols-3 p-4 hover:bg-slate-50 transition-colors">
                                    <div className="col-span-2 pr-4 font-semibold text-slate-800">
                                        Withdrawal request received 15 days or more before the formally-notified last date of admission.
                                    </div>
                                    <div className="text-right font-extrabold text-emerald-600 self-center">100% Refund*</div>
                                </div>
                                
                                <div className="grid grid-cols-3 p-4 hover:bg-slate-50 transition-colors">
                                    <div className="col-span-2 pr-4 font-semibold text-slate-800">
                                        Withdrawal request received less than 15 days before the formally-notified last date of admission.
                                    </div>
                                    <div className="text-right font-extrabold text-emerald-500 self-center">90% Refund</div>
                                </div>
                                
                                <div className="grid grid-cols-3 p-4 hover:bg-slate-50 transition-colors">
                                    <div className="col-span-2 pr-4 font-semibold text-slate-800">
                                        Withdrawal request received 15 days or less after the formally-notified last date of admission.
                                    </div>
                                    <div className="text-right font-extrabold text-blue-600 self-center">80% Refund</div>
                                </div>
                                
                                <div className="grid grid-cols-3 p-4 hover:bg-slate-50 transition-colors">
                                    <div className="col-span-2 pr-4 font-semibold text-slate-800">
                                        Withdrawal request received more than 15 days but less than 30 days after the formally-notified last date of admission.
                                    </div>
                                    <div className="text-right font-extrabold text-slate-600 self-center">50% Refund</div>
                                </div>
                                
                                <div className="grid grid-cols-3 p-4 hover:bg-slate-50 transition-colors">
                                    <div className="col-span-2 pr-4 font-semibold text-slate-800">
                                        Withdrawal request received more than 30 days after the formally-notified last date of admission.
                                    </div>
                                    <div className="text-right font-extrabold text-red-500 self-center">No Refund</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-400 font-light leading-relaxed">
                            * 100% refund is subject to a deduction of an administrative processing charge of maximum ₹1,000. Refund percentages are calculated on the basis of the tuition and university fees component, excluding caution security deposits (which are fully refundable).
                        </p>

                        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 mt-6 space-y-4">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">How to Apply for Fee Refund?</h4>
                            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600 font-light">
                                <li>Collect the official <strong>Admission Withdrawal & Refund Form</strong> from the administrative Registrar Desk.</li>
                                <li>Attach the original <strong>Allotment Letter</strong> (issued by GGSIPU Counselling) and the original <strong>Fee Payment Receipt</strong>.</li>
                                <li>Submit a cancelled cheque or bank passbook copy for the bank account where the refunded amount should be credited.</li>
                                <li>Obtain a formal stamped acknowledgement slip from the Registrar desk upon submission. Refunds are typically processed and disbursed within 21 working days.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeePaymentPortal;
