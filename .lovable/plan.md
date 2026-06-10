## Trocar as 4 fotos da galeria do Portfolio

Subir as 4 imagens enviadas para o CDN (Lovable Assets) e trocar as referências no `src/routes/index.tsx`.

### Ordem
1. `IMG_5730.jpg` (casal · Cristo Redentor)
2. `LAT01795.jpg` (noiva entrando no carro)
3. `LAT06576.jpg` (noiva entre coqueiros)
4. `V4A9374_2.jpg` (noivo abotoando terno)

### Passos
- `lovable-assets create --file /mnt/user-uploads/IMG_5730.jpg` → `src/assets/gallery-1.jpg.asset.json` (e idem para as outras 3 com nomes `gallery-2/3/4.jpg.asset.json`).
- Trocar os imports atuais
  ```ts
  import g1 from "@/assets/gallery-1.jpg";
  ```
  para
  ```ts
  import g1Asset from "@/assets/gallery-1.jpg.asset.json";
  const g1 = g1Asset.url;
  ```
  (e idem para g2, g3, g4). Mantém todos os usos (`[g1,g2,g3,g4]` no grid e `src={g4}` na linha 801) intactos.
- Remover os binários antigos `src/assets/gallery-1.jpg`..`gallery-4.jpg` do repositório.

Também aparece `g4` como fundo de outra seção (linha 801) — vai automaticamente passar a usar a nova foto 4 (noivo). Posso confirmar isso é OK depois ou trocar por outra se preferir.