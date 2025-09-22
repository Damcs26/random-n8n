<p align="center">
  <img src="./custom_nodes/n8n-nodes-random-number/dist/RandomNumber.svg" width="80"/>
</p>

<h1 align="center">n8n - Custom Node: Random Number Generator 🎲</h1>

<p align="center">
  Um conector personalizado para o <a href="https://n8n.io">n8n</a>, que gera números randômicos
  utilizando a API <a href="https://www.random.org/">Random.org</a>.
</p>

---

## 📌 Descrição
Este projeto implementa um **Custom Node para o n8n**, que gera um número aleatório entre um valor mínimo e máximo informados, utilizando a API oficial do **Random.org**.

---

## 🚀 Funcionalidades
- Operação única: **True Random Number Generator**  
- Parâmetros de entrada:
  - `Min` → valor mínimo (inteiro, incluso)
  - `Max` → valor máximo (inteiro, incluso)  
- Saída: JSON contendo número gerado, limites e timestamp.  

Exemplo de saída:
```json
{
  "random": 57,
  "min": 1,
  "max": 100,
  "generatedAt": "2025-09-20T15:39:01.335Z"
}
```

## Instalação
1. Clonar Repositório
git clone https://github.com/SEU-USUARIO/random-n8n.git
cd random-n8n

2. Subir o ambiente com Docker
docker compose up -d
O n8n estará disponível em:
👉 http://localhost:5678

3. Instalar o Custom Node
Copie a pasta do node para o diretório .n8n/custom/:
cp -r custom_nodes/n8n-nodes-random-number ~/.n8n/custom/

4. Build do node
Dentro da pasta do custom node:

cd custom_nodes/n8n-nodes-random-number
npm install
npm run build


Reinicie o n8n e o node estará disponível na interface.

📖 Referências

Documentação n8n - Custom Nodes
API Random.org