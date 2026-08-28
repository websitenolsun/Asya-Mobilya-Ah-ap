export type Media = {
  id: string;
  alt: string;
  label: string;
  tone: string;
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  media: Media;
};

export type Location = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  focus: string[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  year: string;
  summary: string;
  materials: string[];
  media: Media;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  media: Media;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  context: string;
};

export type Faq = { id: string; question: string; answer: string };

const media = (id: string, label: string, tone: string, alt: string): Media => ({ id, label, tone, alt });

export const services: Service[] = [
  ['ozel-olcu-mobilya', 'Özel ölçü mobilya', 'Özel üretim', 'Mekânınıza ait ölçülerden doğan, size özel mobilyalar.', 'İhtiyaç, ölçü, malzeme ve üretimi tek bir sakin akışta ele alıyoruz.', 'ozel', 'Özel ölçü mobilya için soyut ahşap yüzey yer tutucu'],
  ['mutfak-dolabi', 'Mutfak dolabı', 'Yaşam alanları', 'Ölçünüze, alışkanlığınıza ve evinizin ışığına göre mutfaklar.', 'Planlama, malzeme seçimi, üretim ve yerinde montajı tek bir akışta ele alıyoruz.', 'mutfak', 'Mutfak dolabı için soyut ahşap yüzey yer tutucu'],
  ['mutfak-dolabi-yenileme', 'Mutfak dolabı yenileme', 'Yaşam alanları', 'Mevcut mutfağa yeni bir ritim ve kullanım ömrü.', 'Kapak, renk, donanım ve yüzey kararlarını mevcut gövdeyle birlikte değerlendiriyoruz.', 'mutfak-yenileme', 'Mutfak dolabı yenileme için soyut ahşap yer tutucu'],
  ['gardrop', 'Gardırop', 'Yaşam alanları', 'Günlük hayatı sadeleştiren, ölçülü depolama.', 'İç düzeni kullanım alışkanlıklarına göre kurgulanan bağımsız gardıroplar.', 'gardrop', 'Gardırop için soyut ahşap yer tutucu'],
  ['gomme-dolap', 'Gömme dolap', 'Yaşam alanları', 'Duvarın ölçüsüne oturan, görsel gürültüyü azaltan depolama.', 'Niş, kolon ve tavan farklarını tasarımın doğal parçasına dönüştürüyoruz.', 'gomme', 'Gömme dolap için soyut ahşap yer tutucu'],
  ['yatak-odasi-mobilyalari', 'Yatak odası mobilyaları', 'Yaşam alanları', 'Dinlenme alanı için birbiriyle konuşan özel parçalar.', 'Yatak, komodin, şifonyer ve depolamayı aynı malzeme diliyle ele alıyoruz.', 'yatak-odasi', 'Yatak odası mobilyaları için soyut ahşap yer tutucu'],
  ['tv-unitesi', 'TV ünitesi', 'Yaşam alanları', 'Kabloları, ekranı ve depolamayı tek bir sakin yüzeyde toplayın.', 'Görsel gürültüyü azaltan asimetrik ya da yalın üniteler.', 'tv', 'TV ünitesi için soyut ahşap yer tutucu'],
  ['kitaplik', 'Kitaplık', 'Yaşam alanları', 'Kitapları taşıyan değil, odaya bir ritim veren raflar.', 'Duvarın mimarisine uyum sağlayan, açık veya kapalı raf kompozisyonları tasarlıyoruz.', 'kitaplik', 'Kitaplık için soyut çizgisel ahşap yer tutucu'],
  ['calisma-masasi', 'Çalışma masası', 'Yaşam alanları', 'Odaklanmak için tasarlanmış ölçülü bir yüzey.', 'Çalışma biçiminize göre kablo, çekmece ve ergonomiyi bir arada çözüyoruz.', 'masa', 'Çalışma masası için soyut ahşap yer tutucu'],
  ['yemek-masasi', 'Yemek masası', 'Serbest parçalar', 'Uzun sohbetlere yer açan dengeli bir merkez.', 'Mekâna göre oval, yuvarlak veya doğrusal formlar.', 'yemek', 'Yemek masası için soyut ahşap yer tutucu'],
  ['sehpa', 'Sehpa', 'Serbest parçalar', 'Küçük ölçekte belirgin bir malzeme kararı.', 'Tek parça ya da set olarak, odanın ölçüsüne göre tasarlanır.', 'sehpa', 'Sehpa için soyut ahşap yer tutucu'],
  ['ofis-mobilyalari', 'Ofis mobilyaları', 'Ticari alanlar', 'Çalışma alanına düzen, akış ve karakter kazandıran mobilyalar.', 'Masa, depolama, toplantı ve ortak alan çözümlerini birlikte planlıyoruz.', 'ofis', 'Ofis mobilyaları için soyut ahşap yer tutucu'],
  ['magaza-isletme-mobilyalari', 'Mağaza/işletme mobilyaları', 'Ticari alanlar', 'Markanızın mekândaki karşılığını üreten özel çözümler.', 'Teşhir, raf, kasa ve yönlendirme elemanlarını kullanım akışıyla birleştiriyoruz.', 'magaza', 'Mağaza ve işletme mobilyaları için soyut ahşap yer tutucu'],
  ['banko-resepsiyon', 'Banko/resepsiyon', 'Ticari alanlar', 'İlk karşılaşmayı markanızın malzemesiyle kurun.', 'İşlev, dolaşım ve görünür detaylar üzerinden özel üretim bankolar.', 'resepsiyon', 'Banko ve resepsiyon için soyut ahşap yer tutucu'],
  ['ahsap-raf-sistemleri', 'Ahşap raf sistemleri', 'Mimari ahşap', 'Duvar boyunca büyüyen, esnek ve karakterli depolama.', 'Açık raf, niş ve modüler sistemleri mekânın ölçüsüyle eşliyoruz.', 'raf', 'Ahşap raf sistemleri için soyut ahşap yer tutucu'],
  ['ahsap-kapi', 'Ahşap kapı', 'Mimari ahşap', 'Odalar arasında sessiz ve güçlü bir geçiş.', 'Masif detay, sade panel veya gizli kasa seçeneklerini yapının diliyle kuruyoruz.', 'kapi', 'Ahşap kapı için soyut ahşap yer tutucu'],
  ['ahsap-merdiven', 'Ahşap merdiven', 'Mimari ahşap', 'Her adımda hissedilen net bir işçilik.', 'Basamak, rıht ve korkulukları mevcut yapının ölçüsüyle çözüyoruz.', 'merdiven', 'Ahşap merdiven için soyut ahşap yer tutucu'],
  ['ahsap-bolme-dekorasyon', 'Ahşap bölme/dekorasyon', 'Mimari ahşap', 'Mekânı ayırırken ışığı ve akışı koruyan ahşap detaylar.', 'Bölme, panel, çıta ve dekoratif yüzeyleri bütünsel bir kurguda tasarlıyoruz.', 'bolme', 'Ahşap bölme ve dekorasyon için soyut ahşap yer tutucu'],
  ['mobilya-tamiri', 'Mobilya tamiri', 'Bakım ve yenileme', 'İyi bir parçaya yeniden güvenle kullanma şansı.', 'Birleşim, yüzey ve donanım sorunlarını yerinde inceleyerek onarıyoruz.', 'tamir', 'Mobilya tamiri için soyut ahşap yer tutucu'],
  ['mobilya-tadilati', 'Mobilya tadilatı', 'Bakım ve yenileme', 'Mevcut mobilyayı bugünkü ihtiyaca göre yeniden düşünün.', 'Ölçü, kullanım ve estetik gereksinimleriyle parçayı dönüştürüyoruz.', 'tadilat', 'Mobilya tadilatı için soyut ahşap yer tutucu'],
  ['dolap-kapak-degisimi', 'Dolap kapak değişimi', 'Bakım ve yenileme', 'Dolapların görünümünü ve kullanım hissini yenileyin.', 'Yeni kapak, kulp ve yüzey kararlarını mevcut gövdeyle uyumlu çözüyoruz.', 'kapak', 'Dolap kapak değişimi için soyut ahşap yer tutucu'],
  ['mentese-ray-aksesuar-degisimi', 'Menteşe/ray/aksesuar değişimi', 'Bakım ve yenileme', 'Küçük donanım değişiklikleriyle günlük kullanımı iyileştirin.', 'Menteşe, ray, kulp ve diğer aksesuarları ölçü ve kullanım ihtiyacına göre yeniliyoruz.', 'aksesuar', 'Menteşe ve ray değişimi için soyut ahşap yer tutucu'],
  ['hasarli-mobilya-onarimi', 'Hasarlı mobilya onarımı', 'Bakım ve yenileme', 'Hasarın izini azaltan, parçanın karakterini koruyan onarım.', 'Kırık, çizik, nem veya kullanım kaynaklı hasarları malzemeye uygun yöntemle ele alıyoruz.', 'onarim', 'Hasarlı mobilya onarımı için soyut ahşap yer tutucu'],
  ['eski-mobilya-yenileme', 'Eski mobilya yenileme', 'Bakım ve yenileme', 'Zamanı olan bir parçaya yeni bir kullanım hikâyesi.', 'Yüzey, renk, donanım ve gerektiğinde ölçü müdahalesiyle parçayı yeniden hayata katıyoruz.', 'yenileme', 'Eski mobilya yenileme için soyut ahşap yer tutucu'],
].map(([slug, name, category, summary, detail, tone, alt]) => ({ slug, name, category, summary, detail, media: media(slug, name, tone, alt) }));

export const locations: Location[] = [
  { slug: 'istanbul', name: 'İstanbul', region: 'Marmara', summary: 'Şehrin farklı yapı tiplerine uyum sağlayan ölçülü marangozluk.', focus: ['Daire içi sabit mobilya', 'Tadilat sonrası yerleşimler', 'Mimari ahşap detaylar'] },
  { slug: 'kadikoy', name: 'Kadıköy', region: 'İstanbul', summary: 'Eski yapıların karakterine saygılı, yeni kullanıma hazır çözümler.', focus: ['Yüksek tavanlı daireler', 'Mutfak ve kitaplık', 'Yerinde ölçüm'] },
  { slug: 'besiktas', name: 'Beşiktaş', region: 'İstanbul', summary: 'Yoğun kent yaşamı için akıllı depolama ve yalın yüzeyler.', focus: ['Antre ve vestiyer', 'Giyinme odaları', 'Çalışma alanları'] },
  { slug: 'sariyer', name: 'Sarıyer', region: 'İstanbul', summary: 'Geniş evlerde malzeme sürekliliğini koruyan özel üretimler.', focus: ['Mimari panel', 'Merdiven ve korkuluk', 'Masif parçalar'] },
  { slug: 'ankara', name: 'Ankara', region: 'İç Anadolu', summary: 'Planlı, net ve uzun ömürlü ev çözümleri.', focus: ['Sabit mobilya', 'Ofis depolama', 'Özel parçalar'] },
  { slug: 'izmir', name: 'İzmir', region: 'Ege', summary: 'Işıkla birlikte çalışan, ferah ve dayanıklı yüzeyler.', focus: ['Mutfak çözümleri', 'Yemek masaları', 'Duvar kaplamaları'] },
];

export const projects: Project[] = [
  { slug: 'sessiz-koridor', name: 'Sessiz Koridor', type: 'Daire içi sabit mobilya', year: 'Yer tutucu tarih', summary: 'Girişten yaşam alanına uzanan depolamayı tek bir yüzeyde sakinleştiren bir kurgu.', materials: ['Meşe yüzey', 'Mat lake detay', 'Pirinç kulp'], media: media('p1', 'Sessiz Koridor proje görseli', 'corridor', 'Sessiz Koridor projesi için görsel yer tutucu') },
  { slug: 'isigin-izinde', name: 'Işığın İzinde', type: 'Mutfak ve yemek alanı', year: 'Yer tutucu tarih', summary: 'Gün içindeki ışık değişimini takip eden sıcak bir mutfak-yemek ilişkisi.', materials: ['Dumanlı meşe', 'Doğal taş yer tutucu', 'Fırçalı metal'], media: media('p2', 'Işığın İzinde proje görseli', 'kitchen', 'Işığın İzinde projesi için görsel yer tutucu') },
  { slug: 'katmanli-calisma', name: 'Katmanlı Çalışma', type: 'Ev-ofis', year: 'Yer tutucu tarih', summary: 'Çalışma, arşiv ve dinlenme anlarını aynı duvar boyunca birleştiren sistem.', materials: ['Ceviz tonlu kaplama', 'Kanallı panel', 'Keten yüzey'], media: media('p3', 'Katmanlı Çalışma proje görseli', 'office', 'Katmanlı Çalışma projesi için görsel yer tutucu') },
];

export const blogPosts: BlogPost[] = [
  { slug: 'olcu-alma-rehberi', title: 'Özel mobilya için ölçü alma rehberi', category: 'Rehber', date: 'Yer tutucu tarih', readingTime: '4 dk', excerpt: 'İyi bir özel üretim, atölyeye gitmeden önce doğru sorularla başlar.', body: ['Ölçü yalnızca en, boy ve derinlik değildir. Pencerenin açılımı, süpürgelik, prizler ve gün içinde değişen ışık da tasarımın parçasıdır.', 'İlk görüşmede kullanım alışkanlıklarını ve eşyaların gerçek ölçülerini birlikte anlamak, sonradan yapılan düzeltmeleri azaltır.', 'Bu içerik, gerçek proje verileri eklenecek şekilde hazırlanmış bir yer tutucudur.'], media: media('b1', 'Ölçü alma rehberi görseli', 'measure', 'Ölçü alma rehberi için görsel yer tutucu') },
  { slug: 'ahsap-yuzey-bakimi', title: 'Ahşap yüzeyin zamanla güzelleşmesi', category: 'Malzeme', date: 'Yer tutucu tarih', readingTime: '5 dk', excerpt: 'Yüzey seçerken yalnızca ilk günün görüntüsünü değil, yaşlanma biçimini de düşünün.', body: ['Ahşabın dokusu, mekânda temas edilen yerlerde zamanla daha kişisel bir iz bırakır. Doğru bakım, bu izleri korumaya yardım eder.', 'Kullanım alanına göre yağ, vernik veya boya kararını verirken temizlik alışkanlıklarını da tasarıma dahil etmek gerekir.', 'Bu içerik, gerçek bakım yönergeleri eklenecek şekilde hazırlanmış bir yer tutucudur.'], media: media('b2', 'Ahşap yüzey bakımı görseli', 'surface', 'Ahşap yüzey bakımı için görsel yer tutucu') },
  { slug: 'marangozla-calisma', title: 'Bir marangoz atölyesiyle çalışmak', category: 'Süreç', date: 'Yer tutucu tarih', readingTime: '3 dk', excerpt: 'Fikirden montaja kadar hangi adımların sizi beklediğini sadeleştirelim.', body: ['Özel üretimin en değerli tarafı, her kararın gerçek hayattaki karşılığının birlikte görülmesidir.', 'Kısa bir keşif, net bir ihtiyaç listesi ve malzeme konuşması çoğu projenin iyi bir başlangıç yapmasını sağlar.', 'Bu içerik, gerçek atölye notları eklenecek şekilde hazırlanmış bir yer tutucudur.'], media: media('b3', 'Marangozla çalışma görseli', 'workshop', 'Marangozla çalışma yazısı için görsel yer tutucu') },
];

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Gerçek müşteri yorumu burada, içerik onayından sonra yer alacak.', name: 'İsim yer tutucu', context: 'Proje bağlamı yer tutucu' },
  { id: 't2', quote: 'Gerçek müşteri yorumu burada, içerik onayından sonra yer alacak.', name: 'İsim yer tutucu', context: 'Proje bağlamı yer tutucu' },
];

export const faqs: Faq[] = [
  { id: 'f1', question: 'Özel üretim süreci nasıl ilerliyor?', answer: 'Kısa bir tanışma, keşif ve ölçü, tasarım ile teklif, üretim ve son olarak montaj adımlarında ilerliyoruz. Her projenin ritmi ve kapsamı farklıdır.' },
  { id: 'f2', question: 'Hangi bölgelere hizmet veriyorsunuz?', answer: 'İstanbul ve seçili yakın bölgeler için yerinde keşif planlayabiliyoruz. Diğer şehirler için proje kapsamına göre birlikte değerlendirme yapıyoruz.' },
  { id: 'f3', question: 'Kendi malzememi kullanabilir miyim?', answer: 'Malzemenin kullanım alanına uygunluğu, stabilitesi ve işlenebilirliği birlikte kontrol edildikten sonra değerlendirebiliriz.' },
  { id: 'f4', question: 'Tek bir parça için de çalışıyor musunuz?', answer: 'Evet. Bir sehpa, masa veya yatak başlığı gibi tekil parçalar da aynı dikkatle ele alınır.' },
];

export const findBySlug = <T extends { slug: string }>(items: T[], slug?: string) => items.find((item) => item.slug === slug);

export const generateSitemap = (origin = 'https://ahsap-atelier.example') => [
  '/', '/marangoz/', '/hakkimizda/', '/iletisim/',
  ...services.map((item) => `/hizmetler/${item.slug}/`),
  ...locations.map((item) => `/hizmet-bolgeleri/${item.slug}/`),
  ...projects.map((item) => `/projeler/${item.slug}/`),
  ...blogPosts.map((item) => `/blog/${item.slug}/`),
].map((path) => `${origin}${path}`);