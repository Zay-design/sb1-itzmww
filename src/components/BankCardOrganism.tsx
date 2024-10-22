"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import flouciVirtual from '@/assets/flouci-virtual-card.png'
import flouciPhysical from '@/assets/flouci-card.png'
import { Plus, CreditCard, Sliders } from "lucide-react"

// Mock data for bank cards and transactions
const bankCards = [
  { id: 1, name: "Main Account", number: "•••• 1234", balance: 5000, bg: flouciPhysical },
  { id: 2, name: "Savings", number: "•••• 5678", balance: 10000, bg: flouciVirtual },
]

const transactions = [
  { id: 1, cardId: 1, description: "Grocery Store", amount: -50 },
  { id: 2, cardId: 1, description: "Salary Deposit", amount: 3000 },
  { id: 3, cardId: 2, description: "Restaurant", amount: -75 },
  { id: 4, cardId: 3, description: "Office Supplies", amount: -200 },
]

export default function BankCardOrganism() {
  const [selectedCard, setSelectedCard] = useState(bankCards[0])

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="flex justify-between content-center flex-row gap-4">
        <CardTitle>{selectedCard.name} {selectedCard.number}</CardTitle>
        <div className="flex flex-column gap-4">
          <Button variant="secondary"> <Plus className="h-4 w-4 mr-1" />Add money</Button>
          <Button variant="secondary"><CreditCard className="h-4 w-4 mr-1" />Card details</Button>
          <Button variant="secondary"><Sliders className="h-4 w-4 mr-1" />Card Limits</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ScrollArea className="w-full rounded-md ">
          <div className="flex w-max space-x-4">
            {bankCards.map((card) => (
              <BankCard
                key={card.id}
                card={card}
                isSelected={selectedCard.id === card.id}
                onClick={() => setSelectedCard(card)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionList cardId={selectedCard.id} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

function BankCard({ card, isSelected, onClick }) {
  return (
    <Button
      variant={isSelected ? "default" : "ghost"}
      className={`w-[188px] h-[300px] rounded-md p-2 flex flex-col items-start justify-between text-left  bg-background hover:scale-95 ${
        isSelected ? 'hover:scale-100' : 'opacity-50 '
      }`}
      onClick={onClick}
      style={{
        backgroundImage: `url(${card.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div className="font-semibold text-white"></div>
        <div>
          <div className="text-sm text-white/80">{card.number}</div>
          <div className="text-lg font-bold text-white">${card.balance.toLocaleString()}</div>
        </div>
      </div>
    </Button>
  )
}

function TransactionList({ cardId }) {
  const cardTransactions = transactions.filter((t) => t.cardId === cardId)

  return (
    <ul className="space-y-2">
      {cardTransactions.map((transaction) => (
        <li key={transaction.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
          <span>{transaction.description}</span>
          <span className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}>
            ${Math.abs(transaction.amount).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  )
}