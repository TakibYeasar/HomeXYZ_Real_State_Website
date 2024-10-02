import React, { useState } from 'react';

const FinancialTools = () => {
    const [homePrice, setHomePrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMortgage = (e) => {
        e.preventDefault();

        const principal = parseFloat(homePrice) - parseFloat(downPayment);
        const calculatedInterest = parseFloat(interestRate) / 100 / 12;
        const calculatedPayments = parseFloat(loanTerm) * 12;

        // Monthly payment formula
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        setMonthlyPayment(monthly.toFixed(2));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Financial Tools</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Mortgage Calculator</h2>
                <form onSubmit={calculateMortgage} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Home Price ($)</label>
                        <input
                            type="number"
                            value={homePrice}
                            onChange={(e) => setHomePrice(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Down Payment ($)</label>
                        <input
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Interest Rate (%)</label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Loan Term (Years)</label>
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Calculate</button>
                </form>

                {monthlyPayment && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Estimated Monthly Payment:</h3>
                        <p className="text-2xl font-bold text-green-600">${monthlyPayment}</p>
                    </div>
                )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Affordability Calculator</h2>
                {/* Placeholder for Affordability Calculator */}
                <p className="text-gray-700">
                    Use our affordability calculator to determine how much home you can afford based on your income,
                    debts, and expenses.
                </p>
                {/* You can implement the logic for the affordability calculator as needed */}
                <div className="mt-4">
                    <button className="btn btn-secondary">Coming Soon!</button>
                </div>
            </div>
        </div>
    );
};

export default FinancialTools;
