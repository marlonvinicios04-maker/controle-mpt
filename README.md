# Controle de Materiais MPT – Actemium

App de controle de estoque (entradas, saídas, fotos, etiquetas com QR, relatório Excel e painel),
com banco de dados no Firebase e APK Android gerado automaticamente pelo GitHub.

## 1. Firebase (uma vez só)

1. **Authentication** → Começar → Método de login → **E-mail/senha** → ativar → Salvar.
2. **Firestore Database** → Criar banco de dados → local `southamerica-east1 (São Paulo)` → modo de produção.
3. **Firestore Database → Regras**: apague o conteúdo, cole o arquivo `firestore.rules` deste projeto e clique em **Publicar**.

## 2. Gerar o APK

Cada envio para a branch `main` gera um APK novo (aba **Actions**, fluxo "Gerar APK").
Também dá para rodar manualmente: **Actions → Gerar APK → Run workflow**.

O APK fica em **Releases** (arquivo `Controle-MPT.apk`). Link direto da última versão:
`https://github.com/<usuário>/<repositório>/releases/latest/download/Controle-MPT.apk`

Para instalar no Android: abra o arquivo baixado e permita "Instalar apps desconhecidos" quando o celular pedir.
As próximas versões instalam por cima, sem perder o login.

## 3. Primeiro uso

1. Abra o app: aparece **Primeiro acesso**. Crie a conta do administrador (nome, e-mail e senha).
2. Em **Configurações**, envie a logo da empresa.
3. Para trazer os dados da versão anterior (Claude): no app antigo, **Configurações → Exportar backup (.json)**;
   no app novo, **Configurações → Importar backup**.
4. Em **Usuários**, cadastre os colegas com e-mail real e uma senha inicial.

## 4. Versão para computador (opcional)

Settings → Pages → Source: **GitHub Actions**. Depois: Actions → "Publicar versão web" → Run workflow.
O endereço aparece no final da execução (algo como `https://<usuário>.github.io/<repositório>/`).

## Estrutura

- `www/index.html` – o app (HTML/JS, sem build)
- `firestore.rules` – regras de segurança do banco
- `scripts/` – cópia das bibliotecas e ajustes do projeto Android
- `resources/` – ícones do app
- `.github/workflows/` – geração do APK e publicação web
