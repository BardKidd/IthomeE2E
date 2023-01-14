import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // baseUrl: 'https://ithelp.ithome.com.tw/',
    // supportFile: false, 這裡預設從 support/e2e.XXX 裡面取得自己設定的檔案，假如為 false 代表不使用裡面的資源。
  },
  video: false,
  screenshotsFolder: 'cypress/results/screenshots', // 運行失敗保存螢幕截圖的地方
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 6000,
});
