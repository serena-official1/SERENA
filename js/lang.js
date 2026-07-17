/* =============================================
   SERENA — Language System (AR / EN)
   ============================================= */

const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    lang: 'en',

    /* NAV */
    nav_shop: 'Shop',
    nav_size_guide: 'Size Guide',
    nav_shipping: 'Shipping',
    nav_story: 'Story',
    nav_care: 'Care',

    /* ANNOUNCE */
    announce_1: 'New: The Embrace set — now in mocha',
    announce_2: 'Made for the woman you actually are',
    announce_drop: 'Drop 01 — The First Night is live',
    announce_free: 'Free shipping on orders over $80',

    /* HERO */
    hero_eyebrow: 'Introducing — Drop 01',
    hero_h1: 'Softness you<br>can live in.',
    hero_p: 'Premium sleepwear & loungewear, designed for the woman who knows rest isn\'t a luxury — it\'s how she comes back to herself.',
    hero_cta1: 'Shop the first drop',
    hero_cta2: 'Read the story',
    hero_scroll: 'Scroll',

    /* COLLECTIONS PREVIEW (index) */
    coll_eyebrow: 'Drop 01 — The First Night',
    coll_h2: 'Five sets.<br>Five moods.',
    coll_subp: 'One of them is yours.',
    coll_cta: 'See the full collection',

    /* COLLECTION PAGE */
    coll_page_eyebrow: 'Drop 01',
    coll_page_h1: 'The First Night.',
    coll_page_p: 'Five pieces. Five feelings. One drop. Once it\'s gone, it\'s gone.',
    coll_next_eyebrow: 'More coming',
    coll_next_h2: 'The next drop is being stitched<br>as you read this.',
    coll_next_p: 'Get notified the moment it goes live. No spam — just one soft ping.',
    coll_notify_btn: 'Notify me',

    /* PRODUCTS */
    mood_serenity: 'Calm, sleep-ready.',
    mood_ease: 'Lazy Sunday morning.',
    mood_relax: 'Unwinding after work.',
    mood_embrace: 'Hug-in-fabric feel.',
    mood_assurance: 'Quietly luxurious.',
    tag_new: 'New',
    tag_bestseller: 'Bestseller',
    tag_limited: 'Limited',
    prod1_name: 'Model 1',
    prod2_name: 'Model 2',
    prod3_name: 'Model 3',
    prod4_name: 'Model 4',
    prod5_name: 'Model 5',
    prod6_name: 'Model 6',
    prod7_name: 'Model 7',
    prod8_name: 'Model 8',
    price_475: '475 EGP',

    /* PRODUCT PAGE */
    pd_breadcrumb_home: 'Home',
    pd_breadcrumb_coll: 'Collections',
    pd_breadcrumb_item: 'Serenity Long-Sleeve Set',
    pd_title: 'Serenity<br>Long-Sleeve Set',
    pd_mood: '"Calm, sleep-ready." — for the woman whose mind won\'t stop spinning at 2am.',
    pd_desc: 'Our Serenity set is built around breathability. Lightweight cotton in dusty sage, long sleeves you can push up, wide-leg pants that drape without dragging. Designed to keep you cool when the night is warm and warm when the night is cool — which is, as far as we can tell, every night.',
    pd_details_h: 'Details',
    pd_details: [
      '100% long-staple cotton, pre-washed for softness',
      'Top: relaxed fit, side slits, button placket',
      'Pants: elastic waist with drawstring, side pockets',
      'Comes in linen-toned box with botanical tissue',
      'Available in Sage, Blush, and Pearl'
    ],
    pd_cta: 'ORDER NOW',
    pd_wishlist: 'Add to wishlist',

    /* ORDER FORM */
    order_title: 'Complete Your Order',
    order_name_label: 'Full Name',
    order_name_ph: 'Enter your name',
    order_phone_label: 'Phone Number',
    order_phone_ph: '01xxxxxxxxx',
    order_address_label: 'Full Address',
    order_address_ph: 'Governorate, City, Street',
    order_size_label: 'Size',
    order_payment_label: 'Payment Method',
    order_payment_cod: 'Cash on Delivery',
    order_payment_instapay: 'InstaPay',
    order_payment_vodafone: 'Vodafone Cash',
    order_instapay_msg: 'Transfer to InstaPay: <strong>XXXXXXXXXXX</strong>',
    order_vodafone_msg: 'Transfer to Vodafone Cash: <strong>01037811655</strong>',
    order_screenshot_label: 'Transfer Receipt (screenshot)',
    order_submit: 'Confirm Order',
    order_success: 'Your order was sent successfully 🤍',
    order_error: 'Something went wrong, please try again',

    /* BAG DRAWER */
    bag_title: 'Your bag',
    bag_empty: 'Your bag is softly empty.',
    bag_shop: 'Shop the drop',
    bag_subtotal: 'Subtotal',
    bag_checkout: 'Checkout',
    bag_size: 'Size',
    bag_qty: 'Qty',
    bag_remove: 'Remove',

    /* NEWSLETTER */
    news_eyebrow: 'Letters from a softer place',
    news_h2: 'Quiet drops.<br>Soft rest reminders.',
    news_p: 'Once a month. Never more. We respect your inbox like we respect your downtime.',
    news_ph: 'your@email.com',
    news_btn: 'Subscribe',
    news_toast: 'Welcome to the soft place 🌙',

    /* FOOTER */
    footer_tagline: 'Softness you can live in. Premium sleepwear & loungewear for the woman you actually are.',
    footer_shop: 'Shop',
    footer_brand: 'Brand',
    footer_help: 'Help',
    footer_contact: 'Contact',
    footer_story: 'Story',
    footer_values: 'Values',
    footer_care: 'Care',
    footer_press: 'Press',
    footer_shipping: 'Shipping',
    footer_returns: 'Returns',
    footer_size: 'Size guide',
    footer_dm: 'DM us',
    footer_copy: '© 2026 SERENA. Made softly.',
    footer_sub: 'Softness you can live in.',

    /* ABOUT */
    about_eyebrow: 'Our story',
    about_h1: 'We built the pajamas<br>we wished existed.',
    about_sub: 'SERENA started with a question: <em>why does "pajamas" either mean scratchy basics or something designed to be seen?</em>',
    about_newsletter_eyebrow: 'Come rest with us',
    about_newsletter_h2: 'The first drop is here.',
    about_newsletter_p: 'Five pieces. One of them is yours.',
    about_newsletter_cta: 'Shop the collection',
    values_eyebrow: 'What we believe',
    values_h2: 'Five things.<br>All of them soft.',
    values: [
      { num: 'I', title: 'Softness is strength.', p: 'Rest is not weakness — it\'s how strong women recharge.' },
      { num: 'II', title: 'Comfort is the new luxury.', p: 'Real luxury is what you feel, not what you show.' },
      { num: 'III', title: 'Slow over fast.', p: 'Better pieces, made to last, in smaller drops.' },
      { num: 'IV', title: 'Every body, embraced.', p: 'Sizes and cuts designed for real women, not mannequins.' },
      { num: 'V', title: 'Quiet confidence.', p: 'No logos shouting. No trends chasing. Just good pieces.' }
    ],
    promise_eyebrow: ['Promise 01','Promise 02','Promise 03','Promise 04','Promise 05'],
    promise_h2: ['Serenity.','Ease.','Relax.','Embrace.','Assurance.'],
    promise_p: [
      'Soft cotton, breathable weave, sleep-friendly cuts. The set that helps you stop spinning when your mind won\'t.',
      'Loose silhouettes, elastic waists, no digging, no fuss. Made for the in-between hours when nothing should be tight.',
      'Robe-and-slip sets for the in-between hours. Slipping it on should feel like exhaling.',
      'Long sleeves, full pants, fabrics that hold you. The hug-in-fabric feel. For the nights you need to be held.',
      'Silk-touch finishes, lasting quality, made to be loved for years. Quietly luxurious. For when you need reminding.'
    ],
    shop_link: 'Shop',

    /* CARE */
    care_eyebrow: 'Taking care',
    care_h1: 'Your pieces will last<br>as long as you love them.',
    care_sub: 'Good fabric responds to good care. Here\'s how to keep yours soft.',

    /* SHIPPING */
    shipping_eyebrow: 'Delivery & Returns',
    shipping_h1: 'We deliver softly.',
    shipping_sub: 'Free on orders over $80. Easy returns within 14 days.',

    /* SIZE GUIDE */
    size_eyebrow: 'Finding your fit',
    size_h1: 'Every body,<br>every size.',
    size_sub: 'Our pieces are designed to drape, not cling. When in doubt, size up.',

    /* LANG TOGGLE */
  
    size_measurements: 'Measurements',
size_intro: "Grab a soft measuring tape. Measure over light clothing or directly on skin. Don't pull tight — let it rest naturally.",
size_fit_title: '💛 Our fit philosophy:',
size_fit_body: 'Every piece is designed with extra room where it matters — through the body, across the back, around the hips. We don\'t believe in "small fitting." We believe in your body fitting beautifully into ours.',
size_shop_cta: 'Shop the collection', 

lang_toggle: 'العربية',
  },

  ar: {
    dir: 'rtl',
    lang: 'ar',

    /* NAV */
    nav_shop: 'تسوقي',
    nav_size_guide: 'دليل المقاسات',
    nav_shipping: 'الشحن',
    nav_story: 'قصتنا',
    nav_care: 'العناية',

    /* ANNOUNCE */
    announce_1: 'جديد: طقم Embrace — الآن بلون الموكا',
    announce_2: 'صُنع للمرأة التي أنتِ عليها فعلاً',
    announce_drop: 'إطلاق 01 — الليلة الأولى متاح الآن',
    announce_free: 'شحن مجاني للطلبات فوق 80$',

    /* HERO */
    hero_eyebrow: 'نقدّم — الإطلاق الأول',
    hero_h1: 'نعومة<br>تعيشين فيها.',
    hero_p: 'ملابس نوم وراحة فاخرة، مصممة للمرأة التي تعرف أن الراحة ليست رفاهية — بل هي طريقها للعودة إلى نفسها.',
    hero_cta1: 'تسوقي الإطلاق الأول',
    hero_cta2: 'اقرئي قصتنا',
    hero_scroll: 'مرري للأسفل',

    /* COLLECTIONS PREVIEW (index) */
    coll_eyebrow: 'الإطلاق 01 — الليلة الأولى',
    coll_h2: 'خمسة أطقم.<br>خمس مشاعر.',
    coll_subp: 'واحد منهم لكِ.',
    coll_cta: 'شاهدي الكولكشن كامل',

    /* COLLECTION PAGE */
    coll_page_eyebrow: 'الإطلاق 01',
    coll_page_h1: 'الليلة الأولى.',
    coll_page_p: 'خمس قطع. خمسة مشاعر. إطلاق واحد. بمجرد نفاده، انتهى الأمر.',
    coll_next_eyebrow: 'المزيد قادم',
    coll_next_h2: 'الإطلاق التالي يُخاط<br>بينما تقرئين هذا.',
    coll_next_p: 'أخبرينا وسنُعلمكِ فور الإطلاق. بدون سبام — مجرد إشعار ناعم واحد.',
    coll_notify_btn: 'أعلمني',

    /* PRODUCTS */
    mood_serenity: 'هادئة، جاهزة للنوم.',
    mood_ease: 'صباح أحد كسول.',
    mood_relax: 'تخلصي من ضغط اليوم.',
    mood_embrace: 'إحساس العناق بالقماش.',
    mood_assurance: 'فخامة هادئة.',
    tag_new: 'جديد',
    tag_bestseller: 'الأكثر مبيعاً',
    tag_limited: 'كمية محدودة',
    prod1_name: 'موديل 1',
    prod2_name: 'موديل 2',
    prod3_name: 'موديل 3',
    prod4_name: 'موديل 4',
    prod5_name: 'موديل 5',
    prod6_name: 'موديل 6',
    prod7_name: 'موديل 7',
    prod8_name: 'موديل 8',
    price_475: '475 جنيه',

    /* PRODUCT PAGE */
    pd_breadcrumb_home: 'الرئيسية',
    pd_breadcrumb_coll: 'الكولكشن',
    pd_breadcrumb_item: 'طقم Serenity بأكمام طويلة',
    pd_title: 'طقم Serenity<br>بأكمام طويلة',
    pd_mood: '"هادئة، جاهزة للنوم." — للمرأة التي لا يتوقف تفكيرها الساعة 2 صباحاً.',
    pd_desc: 'طقم Serenity مبني على التنفس. قطن خفيف الوزن بلون الأخضر الترابي، أكمام طويلة تقدرين ترفعيها، وبنطلون واسع ينسدل بأناقة. مصمم ليُبقيكِ باردة حين تسخن الليلة ودافئة حين تبرد — وهو على ما يبدو كل ليلة.',
    pd_details_h: 'التفاصيل',
    pd_details: [
      '100% قطن طويل التيلة، مغسول مسبقاً للنعومة',
      'التوب: قصة مريحة، شقوق جانبية، أزرار',
      'البنطلون: خصر مطاطي مع حزام، جيوب جانبية',
      'يُسلَّم في علبة بلون الكتان مع ورق أنيق',
      'متوفر بالألوان: سالج، بلاش، بيرل'
    ],
    pd_cta: 'اطلبي الآن',
    pd_wishlist: 'أضيفي للمفضلة',

    /* ORDER FORM */
    order_title: 'إتمام الطلب',
    order_name_label: 'الاسم كامل',
    order_name_ph: 'اكتبي اسمك هنا',
    order_phone_label: 'رقم التليفون',
    order_phone_ph: '01xxxxxxxxx',
    order_address_label: 'العنوان كامل',
    order_address_ph: 'المحافظة، المدينة، الشارع',
    order_size_label: 'المقاس',
    order_payment_label: 'طريقة الدفع',
    order_payment_cod: 'الدفع عند الاستلام',
    order_payment_instapay: 'InstaPay',
    order_payment_vodafone: 'فودافون كاش',
    order_instapay_msg: 'حوّلي على رقم الـ InstaPay: <strong>01037811655</strong>',
    order_vodafone_msg: 'حوّلي على رقم فودافون كاش: <strong>01037811655</strong>',
    order_screenshot_label: 'صورة إيصال التحويل',
    order_submit: 'تأكيد الطلب',
    order_success: 'تم إرسال طلبكِ بنجاح 🤍',
    order_error: 'حصل خطأ، حاولي تاني',

    /* BAG DRAWER */
    bag_title: 'شنطتك',
    bag_empty: 'شنطتك فاضية بهدوء.',
    bag_shop: 'تسوقي الإطلاق',
    bag_subtotal: 'الإجمالي',
    bag_checkout: 'إتمام الشراء',
    bag_size: 'مقاس',
    bag_qty: 'كمية',
    bag_remove: 'إزالة',

    /* NEWSLETTER */
    news_eyebrow: 'رسائل من مكان أكثر نعومة',
    news_h2: 'إطلاقات هادئة.<br>تذكيرات بالراحة.',
    news_p: 'مرة في الشهر. لا أكثر. نحترم بريدكِ مثلما نحترم وقت راحتكِ.',
    news_ph: 'بريدك الإلكتروني',
    news_btn: 'اشتركي',
    news_toast: 'أهلاً بكِ في المكان الناعم 🌙',

    /* FOOTER */
    footer_tagline: 'نعومة تعيشين فيها. ملابس نوم وراحة فاخرة للمرأة التي أنتِ عليها فعلاً.',
    footer_shop: 'تسوقي',
    footer_brand: 'العلامة',
    footer_help: 'المساعدة',
    footer_contact: 'تواصلي',
    footer_story: 'القصة',
    footer_values: 'قيمنا',
    footer_care: 'العناية',
    footer_press: 'الإعلام',
    footer_shipping: 'الشحن',
    footer_returns: 'الإرجاع',
    footer_size: 'دليل المقاسات',
    footer_dm: 'راسلينا',
    footer_copy: '© 2026 SERENA. صُنع بنعومة.',
    footer_sub: 'نعومة تعيشين فيها.',

    /* ABOUT */
    about_eyebrow: 'قصتنا',
    about_h1: 'صنعنا البيجاما<br>التي تمنيناها.',
    about_sub: 'بدأت SERENA بسؤال: <em>لماذا "البيجاما" إما خامات خشنة أو شيء مصمم ليُرى؟</em>',
    about_newsletter_eyebrow: 'تعالي ارتاحي معنا',
    about_newsletter_h2: 'الإطلاق الأول هنا.',
    about_newsletter_p: 'خمس قطع. واحدة منهن لكِ.',
    about_newsletter_cta: 'تسوقي الكولكشن',
    values_eyebrow: 'ما نؤمن به',
    values_h2: 'خمسة أشياء.<br>كلها ناعمة.',
    values: [
      { num: 'I', title: 'النعومة قوة.', p: 'الراحة ليست ضعفاً — بها تشحن المرأة القوية طاقتها.' },
      { num: 'II', title: 'الراحة هي الرفاهية الحقيقية.', p: 'الفخامة الحقيقية هي ما تشعرين به، لا ما تُظهرينه.' },
      { num: 'III', title: 'البطء أفضل من السرعة.', p: 'قطع أفضل، تدوم أطول، في إطلاقات أصغر.' },
      { num: 'IV', title: 'كل جسد يستحق الاحتضان.', p: 'مقاسات وقصات مصممة للمرأة الحقيقية، لا المانيكان.' },
      { num: 'V', title: 'ثقة هادئة.', p: 'بدون شعارات صاخبة. بدون مطاردة ترندات. فقط قطع جميلة.' }
    ],
    promise_eyebrow: ['الوعد 01','الوعد 02','الوعد 03','الوعد 04','الوعد 05'],
    promise_h2: ['Serenity.','Ease.','Relax.','Embrace.','Assurance.'],
    promise_p: [
      'قطن ناعم، نسيج يتنفس، قصات صديقة للنوم. الطقم الذي يساعدكِ على التوقف حين لا يهدأ تفكيركِ.',
      'تصاميم فضفاضة، خصور مطاطية، بدون ضغط. مصنوع لساعات ما بين ما بين حين لا يجب أن يكون شيء ضيقاً.',
      'أطقم روب وسليب لساعات التحوّل. ارتداؤه يجب أن يشعركِ وكأنكِ تتنفسين.',
      'أكمام طويلة، بنطلونات كاملة، أقمشة تحتضنكِ. إحساس العناق بالقماش. لليالي التي تحتاجين فيها للاحتضان.',
      'لمسات حريرية، جودة تدوم، مصنوع ليُحب لسنوات. فخامة هادئة. لحين تحتاجين للتذكير.'
    ],
    shop_link: 'تسوقي',

    /* CARE */
    care_eyebrow: 'العناية بقطعك',
    care_h1: 'قطعك ستدوم<br>طالما أحببتِها.',
    care_sub: 'القماش الجيد يستجيب للعناية الجيدة. إليكِ كيف تحافظين على نعومتها.',

    /* SHIPPING */
    shipping_eyebrow: 'التوصيل والإرجاع',
    shipping_h1: 'نوصل بهدوء.',
    shipping_sub: 'مجاني للطلبات فوق 80$. إرجاع سهل خلال 14 يوماً.',

    /* SIZE GUIDE */
    size_eyebrow: 'اعثري على مقاسكِ',
    size_h1: 'كل جسد،<br>كل مقاس.',
    size_sub: 'قطعنا مصممة لتنسدل، لا لتضغط. في حالة الشك، اختاري المقاس الأكبر.',

    /* LANG TOGGLE */
   
    size_measurements: 'القياسات',
size_intro: 'استخدمي شريط قياس ناعم. قيسي فوق ملابس خفيفة أو مباشرة على الجسم. متشديش الشريط — سيبيه يرتاح بشكل طبيعي.',
size_fit_title: '💛 فلسفتنا في المقاس:',
size_fit_body: 'كل قطعة مصممة بمساحة إضافية في الأماكن المهمة — عبر الجسم والظهر والحوض. إحنا مش بنؤمن بـ"المقاس الضيق". إحنا بنؤمن إن جسمك هيتناسب بجمال مع تصميمنا.',
size_shop_cta: 'تسوقي الكولكشن', 

    lang_toggle: 'English',
  }
};

/* ---- Core helpers ---- */
function getLang() {
  return localStorage.getItem('serena_lang') || 'ar';
}

function setLang(l) {
  localStorage.setItem('serena_lang', l);
}

function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang][key] ?? TRANSLATIONS['en'][key] ?? key;
}

function applyDirection() {
  const lang = getLang();
  const tr = TRANSLATIONS[lang];
  document.documentElement.lang = tr.lang;
  document.documentElement.dir  = tr.dir;
  document.body.style.textAlign = tr.dir === 'rtl' ? 'right' : 'left';
}

/* ---- Translate all [data-i18n] elements ---- */
function translatePage() {
  applyDirection();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  /* update toggle button label */
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = t('lang_toggle');
}

/* ---- Toggle ---- */
function toggleLang() {
  const current = getLang();
  setLang(current === 'en' ? 'ar' : 'en');
  translatePage();
  if (typeof bag !== 'undefined') bag.render();
  if (typeof renderProduct === 'function') renderProduct();
}

/* ---- Auto-init ---- */
document.addEventListener('DOMContentLoaded', () => {
  translatePage();
});
