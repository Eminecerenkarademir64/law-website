-- Seed Sample Articles
INSERT INTO articles (title, slug, excerpt, content, published, published_at) VALUES
(
  'Türkiye Barolar Birliği Avukatlık Meslek Kuralları',
  'turkiye-barolar-birligi-avukatlik-meslek-kurallari',
  'Avukatlık mesleğinin temel ilkeleri ve etik kuralları hakkında kapsamlı bir inceleme.',
  '<p>Avukatlık mesleği, hukukun üstünlüğünü ve adaletin gerçekleşmesini sağlamak amacıyla icra edilen bir kamu hizmetidir. Bu makalede, Türkiye Barolar Birliği tarafından belirlenen avukatlık meslek kurallarını detaylı olarak inceleyeceğiz.</p><p>Avukatlık mesleğinin temel ilkeleri arasında bağımsızlık, tarafsızlık, dürüstlük ve mesleki sır saklama yükümlülüğü yer almaktadır. Bu ilkeler, avukatların müvekkillerine en iyi hizmeti sunabilmeleri için vazgeçilmezdir.</p>',
  true,
  CURRENT_TIMESTAMP - INTERVAL ''2 days''
),
(
  'Evlendikten Kaç Yıl Sonra Türk Vatandaşlığı Alınır?',
  'evlendikten-kac-yil-sonra-turk-vatandasligi-alinir',
  'Türk vatandaşı ile evlilik yoluyla vatandaşlık başvurusu süreçleri ve gereken belgeler.',
  '<p>Türk vatandaşı ile evlilik, yabancıların Türk vatandaşlığı kazanabilmelerinin en yaygın yollarından biridir. Bu makalede, evlilik yoluyla vatandaşlık başvurusu için gerekli şartları ve süreci detaylı olarak açıklayacağız.</p><p>Türk Vatandaşlık Kanunu''na göre, Türk vatandaşı ile evli olan yabancılar, en az üç yıl evli kaldıktan ve evlilik birliği devam ettiği sürece başvuruda bulunabilirler.</p>',
  true,
  CURRENT_TIMESTAMP - INTERVAL ''5 days''
),
(
  'Kırmızı Bülten Ve İnterpol Araması Nasıl Kaldırılır?',
  'kirmizi-bulten-ve-interpol-aramasi-nasil-kaldirilir',
  'Interpol kırmızı bülten ve arama kararlarının kaldırılması için izlenecek hukuki yollar.',
  '<p>Interpol kırmızı bülteni, uluslararası alanda aranan kişiler için çıkarılan bir belgedir. Bu makalede, kırmızı bülten ve Interpol aramasının nasıl kaldırılabileceğini açıklayacağız.</p><p>Kırmızı bültenin kaldırılması için öncelikle bültene neden olan suçlamaların hukuki dayanağının incelenmesi gerekmektedir. Ardından, Interpol''ün Dosya Kontrol Komisyonu''na (CCF) başvuruda bulunulabilir.</p>',
  true,
  CURRENT_TIMESTAMP - INTERVAL ''7 days''
)
ON CONFLICT (slug) DO NOTHING;
