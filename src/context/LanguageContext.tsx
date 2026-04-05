import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.leadership': 'नेतृत्व',
    'nav.management': 'प्रबंधन',
    'nav.schoolApp': 'स्कूल ऐप',
    'nav.achievements': 'उपलब्धियां',
    'nav.myschool': 'मेरा स्कूल',
    'nav.gallery': 'गैलरी',
    'nav.testimonials': 'विचार',
    'nav.contact': 'संपर्क',
    'nav.admission': 'प्रवेश प्रारंभ',
    // Hero
    'hero.admissionOpen': 'प्रवेश प्रारंभ 2026-27',
    'hero.title1': 'श्री प्रताप नारायण',
    'hero.title2': 'इंटर कॉलेज',
    'hero.subtitle': 'अच्छी शिक्षा और अच्छे संस्कार। आधुनिक तकनीक और पारंपरिक मूल्यों का संगम।',
    'hero.cta': 'संपर्क करें',
    'hero.principalName': 'श्री  अनिल  कुमार  सिंह',
    'hero.principalQual': 'M.A B.Ed',
    // Leadership
    'leadership.label': 'हमारा नेतृत्व',
    'leadership.title': 'मार्गदर्शक और प्रेरणास्रोत',
    'leadership.desc': 'शिक्षा के प्रति समर्पित नेतृत्व जो भविष्य के नायकों को आकार दे रहा है।',
    'leadership.manager': 'प्रबंधक',
    'leadership.principal': 'प्रधानाचार्य',
    'leadership.vicePrincipal': 'उप-प्रधानाचार्य',
    'leadership.clerk': 'लिपिक',
    'leadership.managerName': 'श्री प्रताप नारायण सिंह',
    'leadership.managerQual': '(सेवानिवृत्त पूर्व प्रधानाध्यापक)',
    'leadership.vicePrincipalName': 'श्री बासुदेव कुशवाहा',
    'leadership.clerkName': 'श्री प्रेमसागर कुशवाहा',
    'leadership.clerkQual': 'M.A B.Ed',
    'leadership.vicePrincipalQual': 'B.Sc B.Ed',
    'leadership.message1': 'शिक्षा वह शस्त्र है जिससे हम दुनिया बदल सकते हैं। हमारा लक्ष्य हर बच्चे को सुसंस्कृत और शिक्षित बनाना है।',
    'leadership.message2': 'अनुशासन और कड़ी मेहनत सफलता की कुंजी है। हम अपने छात्रों के सर्वांगीण विकास के लिए प्रतिबद्ध हैं।',
    'leadership.message3': 'शिक्षा उज्ज्वल भविष्य की नींव है। हम हर प्रशासनिक कार्य में उत्कृष्टता के लिए समर्पित हैं।',
    // Management
    'management.label': 'प्रबंधन',
    'management.title': 'प्रबंधन समिति',
    'management.raviSingh': 'रवि सिंह',
    'management.raviQual': 'B.Sc (Currently pursuing)',
    'management.role': 'प्रबंध निदेशक',
    // Features
    'features.label': 'हमारी खास बातें',
    'features.f1.title': 'L.K.G. से इण्टरमीडिएट',
    'features.f1.desc': 'कुशल एवं प्रशिक्षित अध्यापकों द्वारा गुणवत्तापूर्ण शिक्षण कार्य।',
    'features.f2.title': 'स्मार्ट एवं प्रोजेक्टर क्लास',
    'features.f2.desc': 'आधुनिक तकनीक के माध्यम से विषयों को समझने की बेहतर व्यवस्था।',
    'features.f3.title': 'मासिक परीक्षा व्यवस्था',
    'features.f3.desc': 'छात्रों की प्रगति की निगरानी के लिए प्रत्येक माह के अंत में परीक्षा।',
    'features.f4.title': 'विज्ञान प्रयोगशाला',
    'features.f4.desc': 'विज्ञान वर्ग के छात्रों के लिए प्रयोगात्मक ज्ञान हेतु सुसज्जित लैब।',
    'features.f5.title': 'कम्प्यूटर शिक्षण',
    'features.f5.desc': 'आज की आधुनिकता को ध्यान में रखते हुए विशेष कम्प्यूटर शिक्षा।',
    'features.f6.title': 'छात्रवृत्ति की व्यवस्था',
    'features.f6.desc': 'योग्य और मेधावी छात्र/छात्राओं के लिए विशेष छात्रवृत्ति सुविधा।',
    'features.f7.title': 'प्रतियोगी परीक्षाओं की तैयारी',
    'features.f7.desc': 'सैनिक, नवोदय एवं अन्य प्रतियोगी परीक्षाओं की विशेष तैयारी।',
    'features.f8.title': 'CCTV कैमरा सुरक्षा',
    'features.f8.desc': 'पूरे विद्यालय परिसर में CCTV कैमरों द्वारा 24/7 निगरानी।',
    'features.f9.title': 'प्रथम 100 प्रवेश निःशुल्क',
    'features.f9.desc': 'विद्यालय में प्रथम 100 छात्र/छात्राओं का प्रवेश पूर्णतः निःशुल्क।',
    'features.f10.title': 'स्कूल मोबाइल ऐप',
    'features.f10.desc': 'अभिभावकों के लिए बच्चों की प्रगति देखने हेतु विशेष मोबाइल ऐप।',
    'features.f11.title': 'सुविधाजनक वातावरण',
    'features.f11.desc': 'शांत और अनुशासित वातावरण जो पढ़ाई के लिए सर्वोत्तम है।',
    // Digital Services
    'digital.label': 'डिजिटल शिक्षा की ओर कदम',
    'digital.title': 'हमारा स्कूल ऐप',
    'digital.desc': 'श्री प्रताप नारायण इंटर कॉलेज अब पूरी तरह डिजिटल है। हम आधुनिक तकनीक का उपयोग करके शिक्षा को और अधिक पारदर्शी और सुलभ बना रहे हैं।',
    'digital.s1.title': 'ऑनलाइन उपस्थिति (Attendance)',
    'digital.s1.desc': 'अभिभावक अपने बच्चे की दैनिक उपस्थिति मोबाइल ऐप पर देख सकते हैं।',
    'digital.s2.title': 'डिजिटल रसीद (Receipts)',
    'digital.s2.desc': 'फीस जमा करने के बाद तुरंत डिजिटल रसीद प्राप्त करें और पुराना रिकॉर्ड देखें।',
    'digital.s3.title': 'ऑनलाइन होमवर्क',
    'digital.s3.desc': 'छात्र अपना होमवर्क और असाइनमेंट ऑनलाइन प्राप्त और जमा कर सकते हैं।',
    'digital.s4.title': 'परीक्षा परिणाम (Results)',
    'digital.s4.desc': 'मासिक और वार्षिक परीक्षा के परिणाम ऐप पर आसानी से उपलब्ध।',
    'digital.s5.title': 'मोबाइल ऐप सुविधा',
    'digital.s5.desc': 'सभी सूचनाएं और अपडेट सीधे आपके स्मार्टफोन पर नोटिफिकेशन के जरिए।',
    'digital.s6.title': 'सुरक्षित डेटा',
    'digital.s6.desc': 'छात्रों और स्कूल का सारा डेटा पूरी तरह सुरक्षित और गोपनीय रहता है।',
    'digital.download': 'ऐप डाउनलोड करें',
    // Achievements
    'achievements.label': 'हमारी उपलब्धियां',
    'achievements.title': 'गर्व के क्षण और आंकड़े',
    'achievements.desc': 'शिक्षा और छात्र सफलता में हमारे निरंतर प्रयासों का एक प्रमाण।',
    'achievements.years': 'उत्कृष्टता के वर्ष',
    'achievements.yearsSuffix': ' वर्ष',
    'achievements.students': 'खुश छात्र',
    'achievements.success': 'सफलता दर',
    'achievements.awards': 'कुल पुरस्कार',
    // Gallery
    'gallery.label': 'गैलरी',
    'gallery.title': 'विशेष क्षण',
    'gallery.desc': 'स्कूल की कुछ खास और सुनहरी यादें।',
    'gallery.cat1': 'स्कूल परिसर',
    'gallery.cat2': 'सांस्कृतिक कार्यक्रम',
    'gallery.cat3': 'खेलकूद',
    'gallery.cat4': 'विज्ञान प्रदर्शनी',
    'gallery.cat5': 'पुरस्कार समारोह',
    'gallery.cat6': 'स्मार्ट क्लास',
    'gallery.cat7': 'प्रयोगशाला',
    'gallery.cat8': 'पुस्तकालय',
    // My School
    'myschool.title': 'मेरा स्कूल',
    'myschool.desc': 'हमारे विद्यालय की कुछ झलकियां।',
    // Testimonials
    'testimonials.label': 'अभिभावकों के विचार',
    'testimonials.title': 'लोग हमारे बारे में क्या कहते हैं',
    'testimonials.desc': 'हमारे स्कूल के बारे में अभिभावकों और छात्रों के वास्तविक अनुभव।',
    'testimonials.t1.name': 'राजेश कुमार',
    'testimonials.t1.role': 'अभिभावक',
    'testimonials.t1.text': 'मेरे बच्चे के व्यक्तित्व में बदलाव वाकई अद्भुत है। यहाँ की शिक्षण पद्धति बहुत प्रभावी है।',
    'testimonials.t2.name': 'अंजलि सिंह',
    'testimonials.t2.role': 'पूर्व छात्रा',
    'testimonials.t2.text': 'इस स्कूल ने मुझे न केवल शिक्षा दी, बल्कि जीवन की चुनौतियों का सामना करने की शक्ति भी दी।',
    'testimonials.t3.name': 'संजय यादव',
    'testimonials.t3.role': 'अभिभावक',
    'testimonials.t3.text': 'अनुशासन और आधुनिक शिक्षा का एक आदर्श संतुलन। शिक्षकों का समर्पण वास्तव में सराहनीय है।',
    // Facilities
    'facilities.label': 'सुविधाएं',
    'facilities.title': 'स्कूल की सुविधाएं',
    'facilities.desc': 'हम छात्रों को सीखने के लिए एक सुरक्षित और आधुनिक वातावरण प्रदान करते हैं।',
    'facilities.f1.title': 'कंप्यूटर लैब',
    'facilities.f1.desc': 'आधुनिक कंप्यूटर और हाई-स्पीड इंटरनेट से लैस, जहाँ छात्र तकनीकी कौशल सीखते हैं।',
    'facilities.f2.title': 'CCTV निगरानी',
    'facilities.f2.desc': 'छात्रों की सुरक्षा हमारी प्राथमिकता है। पूरे परिसर की निगरानी आधुनिक कैमरों द्वारा की जाती है।',
    'facilities.f3.title': 'RO पीने का पानी',
    'facilities.f3.desc': 'स्वच्छता को ध्यान में रखते हुए, शुद्ध और ठंडे RO पीने के पानी की उचित व्यवस्था है।',
    'facilities.f4.title': 'परिवहन सुविधा',
    'facilities.f4.desc': 'दूर-दराज के क्षेत्रों से आने वाले छात्रों के लिए सुरक्षित और आरामदायक बस सेवा उपलब्ध है।',
    // Footer
    'footer.collegeName': 'श्री प्रताप नारायण इंटर कॉलेज',
    'footer.tagline': 'हमारा उद्देश्य बच्चों को अच्छी शिक्षा देकर उनके भविष्य को बेहतर बनाना है।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contactDetails': 'संपर्क विवरण',
    'footer.address': 'बांसगांव जमुआन, दुदही-कुशीनगर (UP)',
    'footer.copyright': '© 2026 श्री प्रताप नारायण इंटरमीडिएट कॉलेज। सर्वाधिकार सुरक्षित।',
    'footer.home': 'होम',
    'footer.facilities': 'सुविधाएं',
    'footer.achievements': 'उपलब्धियां',
    'footer.gallery': 'गैलरी',
    'footer.testimonials': 'विचार',
    'footer.contact': 'संपर्क',
    // WhatsApp
    'whatsapp.cta': 'हमसे बात करें'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.leadership': 'Leadership',
    'nav.management': 'Management',
    'nav.schoolApp': 'School App',
    'nav.achievements': 'Achievements',
    'nav.myschool': 'My School',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.admission': 'Admission Open',
    // Hero
    'hero.admissionOpen': 'Admission Open 2026-27',
    'hero.title1': 'Shri Pratap Narayan',
    'hero.title2': 'Inter College',
    'hero.subtitle': 'Quality education and good values. A blend of modern technology and traditional values.',
    'hero.cta': 'Contact Us',
    'hero.principalName': 'Shri  Anil  Kumar  Singh',
    'hero.principalQual': 'M.A B.Ed',
    // Leadership
    'leadership.label': 'Our Leadership',
    'leadership.title': 'Guides and Inspiration',
    'leadership.desc': 'Dedicated leadership in education shaping future heroes.',
    'leadership.manager': 'Manager',
    'leadership.principal': 'Principal',
    'leadership.vicePrincipal': 'Vice Principal',
    'leadership.clerk': 'Clerk',
    'leadership.managerName': 'Shri Pratap Narayan Singh',
    'leadership.managerQual': '(Retired Former Headmaster)',
    'leadership.vicePrincipalName': 'Shri Basudev Kushwaha',
    'leadership.clerkName': 'Shri Premsagar Kushwaha',
    'leadership.clerkQual': 'M.A B.Ed',
    'leadership.vicePrincipalQual': 'B.Sc B.Ed',
    'leadership.message1': 'Education is the weapon with which we can change the world. Our goal is to make every child cultured and educated.',
    'leadership.message2': 'Discipline and hard work are the keys to success. We are committed to the holistic development of our students.',
    'leadership.message3': 'Education is the foundation of a bright future. We are dedicated to excellence in every administrative task.',
    // Management
    'management.label': 'Management',
    'management.title': 'Management Committee',
    'management.raviSingh': 'Ravi Singh',
    'management.raviQual': 'B.Sc (Currently pursuing)',
    'management.role': 'Managing Director',
    // Features
    'features.label': 'Our Special Features',
    'features.f1.title': 'L.K.G. to Intermediate',
    'features.f1.desc': 'Quality teaching by skilled and trained teachers.',
    'features.f2.title': 'Smart and Projector Classes',
    'features.f2.desc': 'Better system for understanding subjects through modern technology.',
    'features.f3.title': 'Monthly Exam System',
    'features.f3.desc': 'Exam at the end of each month to monitor student progress.',
    'features.f4.title': 'Science Lab',
    'features.f4.desc': 'Equipped lab for practical knowledge for science students.',
    'features.f5.title': 'Computer Education',
    'features.f5.desc': 'Special computer education keeping in mind today\'s modernity.',
    'features.f6.title': 'Scholarship Facility',
    'features.f6.desc': 'Special scholarship facility for eligible and meritorious students.',
    'features.f7.title': 'Competitive Exam Prep',
    'features.f7.desc': 'Special preparation for Sainik, Navodaya and other competitive exams.',
    'features.f8.title': 'CCTV Camera Security',
    'features.f8.desc': '24/7 monitoring by CCTV cameras in the entire school premises.',
    'features.f9.title': 'First 100 Admissions Free',
    'features.f9.desc': 'Admission of the first 100 students in the school is completely free.',
    'features.f10.title': 'School Mobile App',
    'features.f10.desc': 'Special mobile app for parents to see children\'s progress.',
    'features.f11.title': 'Convenient Environment',
    'features.f11.desc': 'Quiet and disciplined environment which is best for studies.',
    // Digital Services
    'digital.label': 'Step towards Digital Education',
    'digital.title': 'Our School App',
    'digital.desc': 'Shri Pratap Narayan Inter College is now fully digital. We are making education more transparent and accessible using modern technology.',
    'digital.s1.title': 'Online Attendance',
    'digital.s1.desc': 'Parents can see their child\'s daily attendance on the mobile app.',
    'digital.s2.title': 'Digital Receipts',
    'digital.s2.desc': 'Get digital receipt immediately after paying fees and view old records.',
    'digital.s3.title': 'Online Homework',
    'digital.s3.desc': 'Students can receive and submit their homework and assignments online.',
    'digital.s4.title': 'Exam Results',
    'digital.s4.desc': 'Monthly and annual exam results easily available on the app.',
    'digital.s5.title': 'Mobile App Facility',
    'digital.s5.desc': 'All information and updates directly on your smartphone via notifications.',
    'digital.s6.title': 'Secure Data',
    'digital.s6.desc': 'All data of students and school remains completely safe and confidential.',
    'digital.download': 'Download App',
    // Achievements
    'achievements.label': 'Our Achievements',
    'achievements.title': 'Proud Moments and Stats',
    'achievements.desc': 'A testament to our continuous efforts in education and student success.',
    'achievements.years': 'Years of Excellence',
    'achievements.yearsSuffix': ' Years',
    'achievements.students': 'Happy Students',
    'achievements.success': 'Success Rate',
    'achievements.awards': 'Total Awards',
    // Gallery
    'gallery.label': 'Gallery',
    'gallery.title': 'Special Moments',
    'gallery.desc': 'Some special and golden memories of the school.',
    'gallery.cat1': 'School Campus',
    'gallery.cat2': 'Cultural Program',
    'gallery.cat3': 'Sports',
    'gallery.cat4': 'Science Exhibition',
    'gallery.cat5': 'Award Ceremony',
    'gallery.cat6': 'Smart Class',
    'gallery.cat7': 'Laboratory',
    'gallery.cat8': 'Library',
    // My School
    'myschool.title': 'My School',
    'myschool.desc': 'Some glimpses of our school.',
    // Testimonials
    'testimonials.label': 'Parents\' Feedback',
    'testimonials.title': 'What people say about us',
    'testimonials.desc': 'Real experiences of parents and students about our school.',
    'testimonials.t1.name': 'Rajesh Kumar',
    'testimonials.t1.role': 'Parent',
    'testimonials.t1.text': 'The change in my child\'s personality is truly amazing. The teaching method here is very effective.',
    'testimonials.t2.name': 'Anjali Singh',
    'testimonials.t2.role': 'Alumna',
    'testimonials.t2.text': 'This school not only gave me education but also gave me the strength to face life\'s challenges.',
    'testimonials.t3.name': 'Sanjay Yadav',
    'testimonials.t3.role': 'Parent',
    'testimonials.t3.text': 'A perfect balance of discipline and modern education. The dedication of the teachers is truly commendable.',
    // Facilities
    'facilities.label': 'Facilities',
    'facilities.title': 'School Facilities',
    'facilities.desc': 'We provide a safe and modern environment for students to learn.',
    'facilities.f1.title': 'Computer Lab',
    'facilities.f1.desc': 'Equipped with modern computers and high-speed internet, where students learn technical skills.',
    'facilities.f2.title': 'CCTV Monitoring',
    'facilities.f2.desc': 'Student safety is our priority. The entire campus is monitored by modern cameras.',
    'facilities.f3.title': 'RO Drinking Water',
    'facilities.f3.desc': 'Keeping hygiene in mind, there is a proper arrangement of pure and cold RO drinking water.',
    'facilities.f4.title': 'Transport Facility',
    'facilities.f4.desc': 'Safe and comfortable bus service is available for students coming from far-off areas.',
    // Footer
    'footer.collegeName': 'Shri Pratap Narayan Inter College',
    'footer.tagline': 'Our aim is to make the future of children better by giving them good education.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactDetails': 'Contact Details',
    'footer.address': 'Bansgaon Jamuan, Dudahi-Kushinagar (UP)',
    'footer.copyright': '© 2026 Shri Pratap Narayan Intermediate College. All rights reserved.',
    'footer.home': 'Home',
    'footer.facilities': 'Facilities',
    'footer.achievements': 'Achievements',
    'footer.gallery': 'Gallery',
    'footer.testimonials': 'Testimonials',
    'footer.contact': 'Contact',
    // WhatsApp
    'whatsapp.cta': 'Contact Us'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
