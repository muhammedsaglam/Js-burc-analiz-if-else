var burcum = prompt("Lütfen burcunuzu giriniz").toLowerCase().trim();

if (burcum == "aslan") {
  alert(
    "Olumlu özellikleri:Yetenekli, girişken, lider ruhlu. \nOlumsuz özellikleri: Asil ve otoriterdir. Onu ancak kendi yüreği ile yönlendirebilirsiniz.Mantıklı, özellikle sıcakkanlı ve dürüst olmaya çalışın. Sevdiklerinin kalbinde başka birisinin olma ihtimali onu derinden kıskandırır. Buna izin vermeyin."
  );
} else if (burcum == "kova") {
  alert(
    "Olumlu özellikleri: Yenilikçi, ileri görüşlü, önyargısız. \nOlumsuz özellikleri: Dik kafalı, mesafeli Gerçeği aramaya çalışın. Tembel zihniyetinde giden insanlardan hoşlanmaz, değişik ve idealist olmaya çalışın. Özgürlüklerini kısıtlamaya kalkmayın. Sıkıcı ve bunaltıcı problemlerinizi kesinlikle ona açmayın."
  );
} else if (burcum == "balık") {
  alert(
    "Olumlu özellikleri: Kolay uyum sağlayan, romantik, sevgi dolu.\nOlumsuz özellikleri: Kararsız, kolay incelen, alıngan Zarif ve umutla dolu olun. Onu tamamlamaya ve bütünlemeye çalışın. Kendi duygularını güzel ifade edebildiğini düşündüğünden, yanlış anlamalarınızı kendinize saklayın. Hassas ve nazik olun."
  );
} else if (burcum == "oğlak") {
  alert(
    "Olumlu özellikleri: Çalışkan, kararlı, sorumluluk sahibi.\nOlumsuz özellikleri: Çelişkili, maddiyatçı, Kesinlikle düzgün, yavaş ve temkinli yaklaşın. Acele etmeyin, size açılması zaman alacaktır, sabırlı olun Özgürlük konusuna dikkat edin. Onu elde etmek için rahat bırakın, kesinlikle kontrol altında tutmaya çalışmayın"
  );
} else if (burcum == "yay") {
  alert(
    "Olumlu özellikleri: Neşeli, iyimser.\nOlumsuz özellikleri:,Savruk ve bonkördür.  Özgürlük konusuna dikkat edin. Onu elde etmek için rahat bırakın, kesinlikle kontrol altında tutmaya çalışmayın, bir tuzak ya da kapana sıkışmış gibi hissetmek neredeyse onu deli edebilir."
  );
} else if (burcum == "akrep") {
  alert(
    "aOlumlu özellikleri: Kararlılık, önsezi, liderlik.\nOlumsuz özellikleri: Kıskanç, inatçı, alıngan Hayatta elde ettiği tecrübeleri deneyip sonuna kadar ölümüne de olsa gitmesine izin verin. Çok kıskançtır, dikkat edin. Onu kıskandırırsanız kaybedersiniz. Soğuk ve uzak kalmayın, siz sıcak ve duygusal yaklaşın"
  );
} else if (burcum == "terazi") {
  alert(
    "Olumlu özellikleri: Nazik, çekici, çok yönlü.\nOlumsuz özellikleri: Kararsız, tartışmacı, kurnazdır. Olaylara iki taraflı yaklaşmaya çalışın, her iki yönün de değerlendirmesini düzgün yapın. Nezaket esas anahtardır. fiziksel görüntüsünü eleştirmeye kalkmayın. Düzgün giyinin ve derli toplu görünün."
  );
} else if (burcum == "başak") {
  alert(
    "Olumlu özellikleri: Titiz, sorumluluk sahibi, düzenli.\nOlumsuz özellikleri: Aşırı detaycı, asabi, endişeli Dakik ve hassas olmaya çalışın. Olayları genel olarak değil de ayrıntıları ile anlatın. Sabit bir eş arar, ona güven duyduğunuzu hissettirin. Onu sevdiğinizi öncelikle siz söyleyin."
  );
} else if (burcum == "yengeç") {
  alert(
    "Olumlu özellikleri: Sabırlı, duygusal, yaratıcı.\nOlumsuz özellikleri: Dalga dalga değişen tavırlarına karşı bir çeşit duygusal sığınağı olmaya çalışın. Ona kesinlikle bağımlı olun ve ihtiyacınızı hissettiği anda sizi terk etmesi onun için imkânsız gibi olacaktır. Cinsellikten ziyade duygusal anları ön plana çıkarın."
  );
} else if (burcum == "ikizler") {
  alert(
    "<span>Olumlu özellikleri:</span> Hızlı, sempatik, eğlenceli.\nOlumsuz özellikleri: Kaprisli, değişken, sinirli Tutku ve duygu yüklü düşüncelerinizi kendinize saklayın, fazlasından sıkılıp kaçabilir. Hayatları boyunca sürecek olan diğer yarılarını arama gibi özellikleri vardır, mutlaka öncelikle zihinsel bir beraberlik oluşturmalısınız."
  );
} else if (burcum == "boğa") {
  alert(
    "Olumlu özellikleri: Pratik, kararlı, güvenilir.\nOlumsuz özellikleri: Duygulu anlar ve nazik yaklaşımlardan hoşlanır. Mutlu olması için duygu yüklü sabit ve durağan bir ortam idealdir ve onunla beslenir. Tuttuğu bir şeyi, bir kere beğendikten sonra sahip olduklarını, ancak huzursuzluk duyduğunda bırakır."
  );
} else if (burcum == "koç") {
  alert(
    "Olumlu özellikleri: Aktiflik Cesur, bağımsız, lider ruhlu, enerjik, atak.\nOlumsuz özellikleri: Romantizm ile naz, ince işlenmiş duygular kararında olmalı. Fazlası derhal kaçırabilir. Onu bekletmeden hızlı hareket edin. Fiziksel yönden kesinlikle sağlam yapıda olmalısınız."
  );
} else {
  alert(
    "Lütfen burcunuzu doğru giriniz.\nBurçlar aşağıdaki gibidir.\n•Kova\n•Balık\n•Koç\n•Boğa\n•İkizler\n•Yengeç\n•Aslan\n•Başak\n•Terazi\n•Akrep\n•Yay\n•Oğlak"
  );
}
