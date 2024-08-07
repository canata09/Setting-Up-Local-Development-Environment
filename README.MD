

### 2. **Router Ayarlarını Kontrol Et**
Router'ın firewall ayarları da cihazlar arasındaki iletişimi engelleyebilir. Router'ın arayüzüne giriş yaparak gerekli izinleri verdiğinden emin olman gerekiyor. http://192.168.0.1/

- Router arayüzüne giriş yap ve firewall veya güvenlik ayarlarını kontrol et.
- Cihazların aynı ağ segmentinde olduğundan emin ol.
- UPnP (Universal Plug and Play) özelliğini etkinleştirebilirsin. Bu özellik, cihazların birbirini daha kolay bulmasını sağlar.




### 1. **Router Ayarlarını Kontrol Et**
Router'ın ayarlarına erişip portların açık olduğundan emin olman gerekiyor:

1. **Router'a Giriş:**
   - Router’ın IP adresini tarayıcıya yazarak giriş yap. Genellikle bu adres `192.168.0.1` veya `192.168.1.1` gibi olur.
   - Kullanıcı adı ve şifreyle giriş yap. Varsayılan bilgiler genellikle cihazın üzerinde veya kullanım kılavuzunda bulunur.

2. **Port Yönlendirme (Port Forwarding):**
   - Router’ın ayarlarında "Port Forwarding" veya "Virtual Server" bölümüne git.
   - AudioRelay’in kullandığı port numaralarını öğren ve bu portları yönlendir. Genellikle AudioRelay, 59100 ve 59101 portlarını kullanır.
   - Yeni bir kural ekleyerek, bu portları bilgisayarının IP adresine yönlendir.

### 2. **UPnP (Universal Plug and Play) Ayarları**
UPnP özelliğini etkinleştirerek cihazların otomatik olarak port açmasını sağlayabilirsin:

1. **Router Ayarları:**
   - Router ayarlarında "UPnP" bölümüne git.
   - UPnP özelliğini etkinleştir ve kaydet.




### 1. **Firewall Ayarlarını Kontrol Et**
Firewall ayarlarını kontrol edip, AudioRelay uygulamasının ağdaki iletişim kurmasına izin verdiğinden emin olman gerekiyor.

1. **Bilgisayar Firewall:**
  1. Denetim Masası'na git ve "Sistem ve Güvenlik" altında "Windows Defender Firewall" seçeneğine tıkla.
  2. "Windows Defender Firewall'un bir uygulamaya veya özelliğe izin ver" seçeneğine tıkla.
  3. Açılan listede AudioRelay uygulamasını bul ve hem özel hem de genel ağlar için izin verdiğinden emin ol.
  4. Eğer listede yoksa, "Başka bir uygulamaya izin ver" düğmesine tıklayarak AudioRelay uygulamasını manuel olarak ekle.

2. **Router Firewall:**
   - Router'ın güvenlik veya firewall ayarlarına gidip, bu portların açık olduğundan emin ol.
   - Gerekirse firewall'u devre dışı bırakıp test edebilirsin, ancak bu yöntem güvenlik riskleri barındırabilir.

3. **Antivirüs Yazılımı:**
  Eğer bir antivirüs yazılımı kullanıyorsan, bu yazılımın da kendi firewall ayarları olabilir. Antivirüs yazılımının ayarlarından AudioRelay uygulamasına izin verip vermediğini kontrol et.


### 4. **Proxy Ayarları**
Proxy sunucular, çeşitli nedenlerle kullanılır ve birkaç temel işlevi vardır:

1. **Gizlilik ve Anonimlik**: Proxy sunucular, kullanıcıların gerçek IP adreslerini gizleyerek internette anonim kalmalarına yardımcı olur. Bu, kullanıcıların internette gizliliklerini korumalarına ve izlenmelerini önlemelerine olanak tanır.

2. **Güvenlik**: Proxy sunucular, internet bağlantılarını güvenli hale getirmek için kullanılır. Güvenlik duvarları ve içerik filtreleme gibi güvenlik önlemleriyle kötü amaçlı yazılım, virüs ve diğer tehditlere karşı koruma sağlarlar.

3. **Erişim Kontrolü**: Kurumsal ağlarda, yöneticiler proxy sunucuları kullanarak belirli web sitelerine veya içerik türlerine erişimi kontrol edebilirler. Bu, ağda verimliliği artırmak ve uygunsuz içerikleri engellemek için kullanılabilir.

4. **Bant Genişliği Tasarrufu ve Performans İyileştirmesi**: Proxy sunucular, sıkça kullanılan verileri önbelleğe alarak bant genişliği kullanımını azaltabilir ve internet hızını artırabilir. Bu, özellikle büyük organizasyonlarda internet trafiğini optimize etmek için kullanılır.

5. **Coğrafi Kısıtlamaların Aşılması**: Bazı içerikler belirli coğrafi bölgelerle sınırlıdır. Proxy sunucular, kullanıcıların bu coğrafi kısıtlamaları aşmalarına ve başka bölgelerdeki içeriklere erişmelerine olanak tanır.

6. **İzleme ve Kayıt Tutma**: Kurumsal ortamlarda, proxy sunucular kullanılarak kullanıcıların internet aktiviteleri izlenebilir ve kaydedilebilir. Bu, uyumluluk gereksinimlerini karşılamak veya güvenlik olaylarını analiz etmek için önemlidir.

Bu işlevler sayesinde, proxy sunucular hem bireysel kullanıcılar hem de işletmeler için çeşitli avantajlar sunar.

Proxy kullanılıyorsa, bu ayarları kontrol et:

1. **Bilgisayar Proxy:**
   - Ayarlar > Ağ ve İnternet > Proxy bölümüne git.
   - Otomatik proxy ayarlarını kapat ve manuel proxy ayarlarını kontrol et.

2. **Router Proxy:**
   - Router’ın ayarlarında proxy ayarlarının olup olmadığını kontrol et.


### 4. **Ağ Diagnostiği**
Ağda sorun olup olmadığını anlamak için basit bir ağ diagnostik aracı kullanabilirsin:

1. **Bilgisayardan Ping At:**
   - Komut İstemi (CMD) açarak telefonunun IP adresine ping at: `ping <telefonun IP adresi>`.
   - Ping işlemi başarılıysa, cihazlar birbirine ulaşabiliyor demektir.

2. **Telefon Uygulamaları:**
   - Play Store’dan bir ağ diagnostik uygulaması (ör. PingTools) indir.
   - Uygulama ile bilgisayarının IP adresine ping atarak bağlantıyı test et.


### 3. **WiFi Ayarları**
Telefonun WiFi ayarlarını kontrol et:

- Ayarlar > Bağlantılar > WiFi > Gelişmiş Ayarlar bölümüne git.
- IP ayarlarını ve ağın güvenlik ayarlarını kontrol et.
- Mümkünse, statik IP adresi için kullanmayı dene ve aynı ağa bağlı olduğundan emin ol.

