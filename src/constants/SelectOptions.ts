export type City = {
  city: string;
  id: number;
  value: string;
};

export const cities: City[] = [
  { city: "Şəhər seç", id: 999, value: "seç" },
  { city: "Bakı", id: 1, value: "baki" },
  { city: "Gəncə", id: 2, value: "genca" },
  { city: "Sumqayıt", id: 3, value: "sumqayit" },
  { city: "Lənkəran", id: 4, value: "lenkeren" },
  { city: "Mingəçevir", id: 5, value: "mingachevir" },
  { city: "Şirvan", id: 6, value: "shirvan" },
  { city: "Naftalan", id: 7, value: "naftalan" },
  { city: "Şəki", id: 8, value: "sheki" },
  { city: "Yevlax", id: 9, value: "yevlax" },
  { city: "Quba", id: 10, value: "quba" },
  { city: "Qusar", id: 11, value: "qusar" },
  { city: "Zaqatala", id: 12, value: "zaqatala" },
  { city: "Qazax", id: 13, value: "qazax" },
  { city: "Qəbələ", id: 14, value: "qebele" },
  { city: "Bərdə", id: 15, value: "berde" },
  { city: "Ağdam", id: 16, value: "agdam" },
  { city: "Ağstafa", id: 17, value: "agstafa" },
  { city: "Sabirabad", id: 18, value: "sabirabad" },
  { city: "Salyan", id: 19, value: "salyan" },
  { city: "Oğuz", id: 20, value: "oguz" },
  { city: "Xırdalan", id: 21, value: "xirdalan" },
  { city: "Xankəndi", id: 22, value: "xankendi" },
  { city: "Şuşa", id: 23, value: "shusha" },
  { city: "Tovuz", id: 24, value: "tovuz" },
  { city: "Gədəbəy", id: 25, value: "gedebey" },
  { city: "Göyçay", id: 26, value: "goychay" },
  { city: "Biləsuvar", id: 27, value: "bilesuvar" },
  { city: "Kürdəmir", id: 28, value: "kurdamir" },
  { city: "Laçın", id: 29, value: "lachin" },
  { city: "Lerik", id: 30, value: "lerik" },
  { city: "Yardımlı", id: 31, value: "yardimli" },
  { city: "Şamaxı", id: 32, value: "shamaxi" },
  { city: "Şabran", id: 33, value: "shabran" },
  { city: "Siyəzən", id: 34, value: "siyez" },
  { city: "Qubadlı", id: 35, value: "qubadli" },
];

export type Category = {
  label: string;
  value: string;
};

export const categories: Category[] = [
  { label: "Kateqoriya seç", value: "seç" },
  { label: "Elektronika", value: "elektronika" },
  { label: "Sənədlər və Kartlar", value: "senedler-kartlar" },
  { label: "Açarlar", value: "acarlar" },
  { label: "Geyim və Aksesuarlar", value: "geyim-aksesuarlar" },
  { label: "Nəqliyyat Vasitələri", value: "neqliyyat-vasiteleri" },
  { label: "Ev Heyvanları", value: "ev-heyvanlari" },
  { label: "Zərgərlik", value: "zergelik" },
  { label: "Çantalar və Cüzdanlar", value: "cantalar-cuzdanlar" },
  { label: "Optika (Eynəklər və s.)", value: "optika" },
  { label: "Saatlar", value: "saatlar" },
  { label: "Paltar", value: "paltar" },
  { label: "Digər", value: "diger" },
];
