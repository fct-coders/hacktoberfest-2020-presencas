## Guia de contribuição

### Deseja adicionar sua presença no evento?

Para adicionar sua presença neste evento os passos a seguir são bem simples:

1. Faça um "fork" do repositório.
2. Clone o seu fork 

```bash
git clone https://github.com/USER/hacktoberfest-presencas.git.
```
3. Abra o arquivo `data/_contributors.json` em algum editor de texto.
4. Siga o template para adicionar sua presença:
```json
    {
        "username": "daenerystargaryem",  // seu nome de usuário no Github
        "about": "Queen of Meereen, Khaleesi of the Great Grass Sea, Mother of Dragons, The Unburnt, Breaker of Chains, Television, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, Lady of Dragonstone",  // Uma frase curta sobre você
        "languages": ["High-Valirian"],
        "year": "2005"
    }
```
5. Navegue até o diretório que você clonou através do seu git CLI (no terminal).
6. Crie uma branch para a sua alteração: 
```bash
git checkout -b add-contributor.
```
7. Adicione as mudanças realizadas:
```bash
git add data/_contributors.json
```
8. E realize o commit:
```bash
git commit -m "feat: add {username} contributor"
```
9. Realize o envio dessas mudanças para o repositório remoto:
```bash
git push origin add-contributor
```
10. Crie sua pull request e aguarde a aprovação.
