/* =====================================================================
   云词库 / 云同步配置（可选，留空就完全不影响使用）

   填上 Supabase 项目的地址和 anon key 就会自动启用：
     · 词库改为从云数据库读取（你在 admin.html 里改完点“发布”即可生效）
     · 玩家进度按「匿名设备 ID」自动上传，换手机可用同步码恢复

   这两项都是「公开信息」，放在网页里是安全的 —— 真正的权限由数据库的
   RLS 策略控制（见 supabase-setup.sql）。千万不要把 service_role key 填在这里。
   ===================================================================== */
window.CET6_CONFIG = {
  supabaseUrl: 'https://ibdnwqkurxkdhzyxolmy.supabase.co',
  supabaseAnonKey: 'sb_publishable_El3YshUMbJNzRZ4geoTfNg_WlWQ9mCH',
  wordsTable: 'words',
  progressTable: 'progress',
  codesTable: 'codes',
  /* 验证码云函数名（短信/邮件）。留空 = 关闭，忘记密码走「找回码」
     想启用：部署 supabase/functions/send-code 后，这里填 'send-code' */
  verifyFn: '',
  /* 邮箱验证码（数据库直发，不用云函数）：true = 忘记密码时提供「获取验证码」
     需要先在 Supabase 跑 supabase-mail.sql */
  mailCode: true,
  /* 词库从哪读：
     false = 读静态文件 words.json（省流量，推荐；改词库就上传这一个文件）
     true  = 读云数据库（能在 admin.html 里点「发布到云」直接更新，但每次打开游戏
             都要从云数据库下载整份词表，比较费免费额度） */
  useCloudWords: false,
  /* 是否要求输入激活码才能玩：
     false = 任何人打开就能玩
     true  = 必须先输入你卖出去的激活码（记得先跑 supabase-codes.sql） */
  requireCode: true,
  /* 没激活时，激活页上显示的购买方式（改成你自己的收款联系方式） */
  buyInfo: '购买激活码：加微信 <b>huyixiaoxinxuejie</b>（一个码一个账号，六级+四级都能玩；换手机登录同一账号可继续用）',
  /* 是否要求先注册/登录账号才能玩：
     true  = 打开先看到首页，登录/注册后才能进游戏（记得先跑 supabase-users.sql）
     false = 直接进游戏；登录入口放在主菜单里 */
  requireLogin: true,
  perLevel: 20,
  chapterSize: 10
};
