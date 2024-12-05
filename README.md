# FrontEnd | FullStack ResTIC36  

![vs](https://github.com/user-attachments/assets/259489a8-65be-4a28-96fc-c5ec67b2f54d)

## Descrição  

Este projeto visa o desenvolvimento do frontend da aplicação fullstack final da trilha, utilizando o framework Angular. O frontend deve ser completamente responsivo, intuitivo e em conformidade com o layout proposto. A estrutura será baseada em componentes reutilizáveis, permitindo fácil manutenção e escalabilidade. O projeto também incluirá funcionalidades dinâmicas, como formulários e navegação, além do uso do Angular Material. As informações serão consumidas diretamente de um backend em desenvolvimento, substituindo o uso inicial do JSON Server.  

## Requisitos  

- **Componentização**: Criar componentes reutilizáveis, como header, botão, card, descrição e input, que possam ser usados em diferentes partes do sistema.  
- **Roteamento**: Implementar o roteamento para garantir uma navegação fluida entre as páginas da aplicação.  
- **Estilos Globais com Variáveis CSS**: Definir variáveis CSS (como cores e tipografia) no arquivo `style.css` e aplicá-las em todos os componentes e telas para assegurar consistência visual e facilitar futuras alterações.  
- **Integração com Backend**: Configurar serviços no Angular para consumir dados do backend via chamadas HTTP, utilizando o módulo `HttpClientModule`.  

## Estrutura de Navegação  

- **Página de Pedido**:  
  - Ao clicar em "Pedido", o usuário será redirecionado para a tela de pedidos, que consumirá dados do backend.  
- **Página de Cardápio**:  
  - Ao clicar em "Cardápio", o usuário será redirecionado para a tela com as categorias de hambúrguer, cujos dados serão carregados via API.  
  - Ao selecionar uma categoria, o usuário será direcionado para uma página com os hambúrgueres disponíveis naquela categoria.  

## Como Executar a Aplicação  

1. Clone este repositório para a sua máquina.  
2. Abra o repositório em sua IDE preferida.  
3. No terminal, execute o comando:  
   ```  
   npm install  
   ```  
4. Certifique-se de que o backend está configurado e rodando localmente.  
5. Em outro terminal, execute:  
   ```  
   npm start  
   ```  
6. A aplicação será aberta automaticamente no seu navegador.  

## Tecnologias Utilizadas  

- **HTML**  
- **CSS**  
- **TypeScript**  
- **Node.js**  
- **Angular**  
- **[Angular Hot Toast](https://ngxpert.github.io/hot-toast/)**  
- **[Angular Material](https://material.angular.io/)**  
