-- Seed Practice Areas
INSERT INTO practice_areas (title, slug, description, icon, display_order) VALUES
('İş Hukuku', 'is-hukuku', 'İş hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. İşçi ve işveren haklarını koruyoruz.', 'briefcase', 1),
('Aile ve Boşanma Hukuku', 'aile-ve-bosanma-hukuku', 'Aile hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Boşanma, velayet ve nafaka davalarında yanınızdayız.', 'home', 2),
('Gayrimenkul Hukuku', 'gayrimenkul-hukuku', 'Gayrimenkul hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Tapu, kira ve inşaat hukuku konularında uzmanız.', 'building', 3),
('Ceza Hukuku', 'ceza-hukuku', 'Ceza hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Suç mağdurları ve sanıklar için hukuki destek sağlıyoruz.', 'scale', 4),
('Tazminat Hukuku', 'tazminat-hukuku', 'Tazminat hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Maddi ve manevi tazminat davalarında tecrübeliyiz.', 'file-text', 5),
('Miras Hukuku', 'miras-hukuku', 'Miras hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Veraset, terekenin paylaşımı ve vasiyetname konularında hizmet veriyoruz.', 'users', 6),
('Şirketler Hukuku', 'sirketler-hukuku', 'Şirketler hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Şirket kuruluşu, birleşme ve devir işlemlerinde yanınızdayız.', 'briefcase', 7),
('İdare Hukuku', 'idare-hukuku', 'İdare hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. İdari davalar ve kamu kurumlarıyla ilgili hukuki süreçlerde destek veriyoruz.', 'landmark', 8),
('Yabancılar Hukuku', 'yabancilar-hukuku', 'Yabancılar hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Oturma izni, çalışma izni ve vatandaşlık başvurularında yardımcı oluyoruz.', 'globe', 9),
('Tüketici Hukuku', 'tuketici-hukuku', 'Tüketici hukuku hakkında detaylı bilgi ve danışmanlık almak için tıklayın. Ayıplı mal, hizmet ve tüketici hakları konularında uzmanız.', 'shopping-cart', 10)
ON CONFLICT (slug) DO NOTHING;
