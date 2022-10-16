"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('enderecos', [
            {
                "idpessoa": 1,
                "cep": "35535-000",
                "logradouro": "",
                "complemento": "",
                "bairro": "Bom Jardim das Pedras",
                "cidade": "Carmópolis de Minas",
                "estado": "MG"
            },
            {
                "idpessoa": 2,
                "cep": "35530-000",
                "logradouro": "",
                "complemento": "",
                "bairro": "",
                "cidade": "Cláudio",
                "estado": "MG"
            },
            {
                "idpessoa": 3,
                "cep": "32676-265",
                "logradouro": "Avenida Juiz Marco Túlio Isaac",
                "complemento": "de 9101 a 10199 - lado ímpar",
                "bairro": "Laranjeiras",
                "cidade": "Betim",
                "estado": "MG"
            },
            {
                "idpessoa": 4,
                "cep": "01001-000",
                "logradouro": "Praça da Sé",
                "complemento": "lado ímpar",
                "bairro": "Sé",
                "cidade": "São Paulo",
                "estado": "SP"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('enderecos', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC1lbmRlcmVjb3Muc2VlZGVycy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9zZWVkZXJzLzQtZW5kZXJlY29zLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQzFDO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEtBQUssRUFBRSxXQUFXO2dCQUNsQixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1lBQ0Q7Z0JBQ0ksVUFBVSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1lBQ0Q7Z0JBQ0ksVUFBVSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFlBQVksRUFBRSxnQ0FBZ0M7Z0JBQzlDLGFBQWEsRUFBRSw4QkFBOEI7Z0JBQzdDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLElBQUk7YUFDakI7WUFDRDtnQkFDSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixLQUFLLEVBQUUsV0FBVztnQkFDbEIsWUFBWSxFQUFFLGFBQWE7Z0JBQzNCLGFBQWEsRUFBRSxZQUFZO2dCQUMzQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLElBQUk7YUFDakI7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQy9DLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNKLENBQUMifQ==