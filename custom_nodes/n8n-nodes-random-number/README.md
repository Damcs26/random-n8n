![Logo Random](.assets/random-logo.png)
# Desagio Custom Node N8N - RandomNumber

Este projeto é um conector para a plataforma de automação **N8N**, gerando números aleatórios de 1 a 100 de forma simples e reutilizável em workflows.

## Objetivo

Criar um custom node, chamado Random com a operação True Random Number Generator que recebe um valor mínimo e máximo inteiros, e retorna um número aleatório dentro desse intervalo.

Pré-requisitos Técnicos
* Node.js Versão 22 LTS
* TypeScript
* Docker Compose
* N8N

Funcionalidades
* Recebe como entrada:
Min: valor mínimo
Max: valor máximo
Retorna na na saída:
* ramdom: número inteiro aleatório
* min: exibe valor mínimo 
* max: exibe valor máximo
* generatedAt: timestamp do momento de geração

### Exemplo de saída
Retorno do Json
{
    "random":95,
    "min":1,
    "max":100,
    "generatedAt": 2025-
}

Para rodar o projeto
1. Clonar o repositório:
git clone https://github.com/seu-usuario/n8n-random-node.git

2. Intale as dependências
npm install

3. Compile o projeto no cmd:
(na pasta do arquivo n8n-random-node)
npm run build

4. Suba a infraestrutura do N8N com o Docker
(Com o docker aberto)
Compile no cmd
(na pasta principal do projeto)
docker compose up -d
* Obs: caso já tiver outro projeto rodando no Docker:
Complie no cmd
docker-composer down depois docker compose up-d
4. Acesse o localhost no navegador:
http://localhost:5678

6. Estrutura do Projeto
(colocar ícone de pasta)n8n-nodes-random-number/
|-src/
| |- RandomNumber.node.ts 



