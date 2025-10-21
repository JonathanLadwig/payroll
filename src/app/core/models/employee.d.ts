export interface Employee {
    id: string
    name: string
    team: string
    summary: Summary
    earnings: Earning[]
}

export interface Summary {
    totalEarnings: number
    totalDeductions: number
    netTotal: number
    uif: number
    paye: number
    total: number
}

export interface Earning {
    name: string
    description: string
    type: string
    quantity: number
    rate: string
}