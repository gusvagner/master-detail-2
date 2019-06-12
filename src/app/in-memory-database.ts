import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';


export class InMemoryDatabase implements InMemoryDbService {
    
    createDb(){
        const categories: Category[] = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas da casa" },
            { id: 2, name: "Saúde", description: "Plano de saúde e remédios" },
            { id: 3, name: "Lazer", description: "Cinema, parques, praia, etc." }
        ];

        const entries: Entry[] = [
            { id: 1, name: "Uber", categoryId: categories[0].id, category: categories[0], paid: true, date: "17/10/2018", amount:"15,00", type:"expense" } as Entry,
            { id: 2, name: "Aluguel", categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount:"800,00", type:"expense" } as Entry,
            { id: 3, name: "Carro", categoryId: categories[2].id, category: categories[2], paid: false, date: "17/10/2018", amount:"10000,00", type:"expense" } as Entry
        ]

        return { categories, entries }

    };

}