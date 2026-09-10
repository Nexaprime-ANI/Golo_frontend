"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getWalletBalance, getWalletTransactions } from "../lib/api";
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Clock, Search, Wallet } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WalletPage() {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const [balanceRes, transRes] = await Promise.all([
          getWalletBalance(),
          getWalletTransactions()
        ]);
        setBalance(balanceRes?.balance || balanceRes?.data?.balance || 0);
        setTransactions(transRes?.transactions || transRes?.data?.transactions || []);
      } catch (error) {
        console.error("Failed to fetch wallet info", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (user) {
      fetchWallet();
    }
  }, [user]);

  return (
    <>
      <Navbar />

      <div className="relative z-10 min-h-screen bg-[#f7f6f2] pt-10 md:pt-14">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-8 lg:py-10">
          
          <div className="mb-6">
            <Link href="/profile" className="inline-flex items-center text-[14px] font-semibold text-[#157a4f] hover:underline transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Profile
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Header section matching profile UI */}
            <div className="rounded-[12px] border border-[#ececec] bg-white px-3 md:px-6 py-6 shadow-sm overflow-hidden relative">
              <div className="absolute right-[-40px] top-[-40px] opacity-[0.03] pointer-events-none">
                <Wallet size={200} />
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-[#e9f4ef] text-[#157a4f] shadow-sm border border-[#cde9d9]">
                    <Wallet size={32} />
                  </div>
                  <div className="mt-1">
                    <h1 className="text-[34px] leading-none font-semibold text-[#1f1f1f]">My Wallet</h1>
                    <p className="text-sm text-[#8d8d8d] mt-2 max-w-[520px]">
                      Your GOLO wallet balance. Use this balance seamlessly during checkout when posting new ads or promotions. Unutilized funds from cancelled ads are automatically credited here.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#efefef]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <div className="rounded-[10px] border border-[#d8d8d8] bg-[#f8f8f8] px-5 py-5 min-h-[90px] shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:bg-white hover:border-[#157a4f] transition-all">
                    <p className="text-[10px] tracking-[0.14em] uppercase text-[#777] font-semibold">Available Balance</p>
                    <p className="mt-1 text-[28px] font-bold text-[#1b1b1b]">₹{balance.toLocaleString()}</p>
                  </div>
                  <div className="rounded-[10px] border border-[#d8d8d8] bg-[#f8f8f8] px-5 py-5 min-h-[90px] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                    <p className="text-[10px] tracking-[0.14em] uppercase text-[#777] font-semibold">Total Transactions</p>
                    <p className="mt-1 text-[28px] font-bold text-[#1b1b1b]">{transactions.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions List */}
            <div className="rounded-[12px] border border-[#ececec] bg-white px-3 md:px-6 py-6 shadow-sm">
              <h3 className="text-[22px] font-semibold text-[#232323] flex items-center gap-2 border-b border-[#efefef] pb-4 mb-4">
                <Clock size={20} className="text-[#157a4f]" />
                Transaction History
              </h3>

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#157a4f]"></div>
                </div>
              ) : transactions.length === 0 ? (
                <div className="text-center py-16 bg-[#f9fafb] rounded-xl border border-dashed border-[#e5e7eb]">
                  <Search className="mx-auto text-[#d1d5db] mb-3" size={32} />
                  <h3 className="text-[15px] font-bold text-[#1f2937] mb-1">No transactions yet</h3>
                  <p className="text-[#6b7280] text-[13px]">When you cancel an ad or receive a refund, it will appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div key={tx._id} className="flex items-center justify-between p-4 rounded-xl border border-[#ececec] hover:shadow-sm hover:border-[#d8d8d8] transition-all bg-[#fafafa] hover:bg-white">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${tx.type === 'credit' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#ffedd5] text-[#c2410c]'}`}>
                          {tx.type === 'credit' ? <ArrowDownLeft size={22} /> : <ArrowUpRight size={22} />}
                        </div>
                        <div>
                          <p className="text-[15px] font-semibold text-[#1f1f1f]">{tx.description || (tx.type === 'credit' ? 'Refund / Credit' : 'Payment / Debit')}</p>
                          <p className="text-[12px] text-[#7a7a7a] mt-0.5">{new Date(tx.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                      </div>
                      <div className={`text-[18px] font-bold ${tx.type === 'credit' ? 'text-[#166534]' : 'text-[#1f1f1f]'}`}>
                        {tx.type === 'credit' ? '+' : '-'}₹{tx.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
