# Recursos Nativos - Inglês to Go

## Ícones e Splash Screens

Os recursos visuais da aplicação estão localizados em `/public`:
- `icon.png` - Ícone principal (1024x1024)
- `splash.png` - Tela de abertura (1080x1920)

## Próximos Passos para Publicação

### 1. Preparar Assets Nativos

```bash
# Instalar dependências
npm install

# Gerar ícones e splash screens para iOS e Android
npx @capacitor/assets generate --iconBackgroundColor '#ffffff' --iconBackgroundColorDark '#1a1a1a' --splashBackgroundColor '#ffffff' --splashBackgroundColorDark '#1a1a1a'
```

### 2. Build e Sincronizar

```bash
# Build da aplicação web
npm run build

# Sincronizar com plataformas nativas
npx cap sync
```

### 3. Configuração iOS (necessário Mac com Xcode)

1. Abra o projeto iOS:
   ```bash
   npx cap open ios
   ```

2. No Xcode:
   - Selecione o projeto "App" no navigator
   - Em "Signing & Capabilities":
     - Selecione seu Team (Apple Developer Account)
     - Configure Bundle Identifier: `app.lovable.92502ef92118477cbe2cb77e93aff393`
   - Em "General":
     - Display Name: `Inglês to Go`
     - Version: `1.0.0`
     - Build: `1`
     - Deployment Target: iOS 13.0+

3. Configure Privacy Strings no `Info.plist`:
   - NSMicrophoneUsageDescription: "Precisamos do microfone para praticar pronúncia"
   - NSCameraUsageDescription: "Câmera para recursos futuros"
   - NSSpeechRecognitionUsageDescription: "Reconhecimento de voz para avaliar pronúncia"

4. Build para teste ou publicação:
   - Product → Archive
   - Validate App
   - Distribute App → App Store Connect

### 4. Configuração Android (necessário Android Studio)

1. Abra o projeto Android:
   ```bash
   npx cap open android
   ```

2. No Android Studio:
   - Em `android/app/build.gradle`:
     - Verifique `applicationId`: `app.lovable.92502ef92118477cbe2cb77e93aff393`
     - `versionCode`: `1`
     - `versionName`: `"1.0.0"`
     - `minSdkVersion`: `22`
     - `targetSdkVersion`: `34`

3. Configure permissões no `AndroidManifest.xml`:
   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.RECORD_AUDIO" />
   <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
   ```

4. Gerar APK/AAB para publicação:
   - Build → Generate Signed Bundle / APK
   - Escolha "Android App Bundle" (AAB) para Play Store
   - Crie ou selecione keystore
   - Build release

### 5. Preparar Store Listings

**App Store (iOS):**
- Screenshots: 6.5", 5.5" (iPhone)
- App Preview videos (opcional)
- Descrição, palavras-chave, categoria
- Rating de conteúdo
- Informações de contato e suporte

**Google Play Store (Android):**
- Screenshots: Phone, 7" tablet, 10" tablet
- Feature graphic (1024x500)
- Descrição curta (80 chars) e completa (4000 chars)
- Categoria, rating de conteúdo
- Política de privacidade URL

### 6. Informações Necessárias

- **Apple Developer Account**: R$550/ano (Individual)
- **Google Play Console**: R$25 taxa única
- **Keystore Android**: Guarde com segurança (não pode ser recuperado)
- **Privacy Policy URL**: Necessário para ambas as stores
- **Support URL/Email**: Para contato de usuários

## Permissões Configuradas

### iOS
- Microfone (para prática de pronúncia)
- Reconhecimento de voz
- Acesso à internet

### Android
- Internet
- Gravação de áudio
- Modificação de configurações de áudio

## Troubleshooting

- **Ícones não aparecem**: Execute `npx @capacitor/assets generate` novamente
- **Build falha iOS**: Verifique certificados e provisioning profiles no Xcode
- **Build falha Android**: Verifique keystore e build.gradle configurations
