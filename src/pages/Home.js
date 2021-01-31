import React from 'react';
import DefaultLayout from "../components/layout/DefaultLayout";
import SiteTabs from "../components/layout/SiteTabs"

/**
 * Website homepage component
 */

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    key: 'intro',
                    title: "نبذه عن هند",
                    content: {
                        introContent: "هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي." +
                            "هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.",
                        experiences: [
                            {
                                title: "تطوير الأعمال"
                            },
                            {
                                title: "المشاريع الصغيرة"
                            },
                            {
                                title: "مشاركة العملاء"
                            },
                            {
                                title: "الإعلام"
                            },
                            {
                                title: "التحدث أمام الجمهور"
                            },
                            {
                                title: "الدعاية والإعلان"
                            },
                            {
                                title: "ريادة الأعمال"
                            },
                            {
                                title: "القيادة"
                            },
                            {
                                title: "التسويق الرقمي"
                            }
                        ],
                        showSideThumbnails: false,
                        mainContent: [
                            {
                                title: "المقدمة التعريفية لـ هند الناهض ",
                                link: "https://www.youtube.com/embed/3GA8WBNUnsc",
                                type:'video'
                            }
                        ]

                    }
                },
                {
                    key: 'store',
                    title: "متجر",
                    content: {
                        showSideThumbnails: true,
                        mainContent: [
                            {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "104"
                            },
                            {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "104",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "39"
                            },
                            {
                                title: "دورة صناعة المحتوى مع هند الناهض",
                                link: "https://www.youtube.com/embed/v=JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            },
                            {
                                title: "المقدمة التعريفية لـ هند الناهض ",
                                link: "http://www.africau.edu/images/default/sample.pdf",
                                type: "pdf",
                                price: "300",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "120"
                            }, {
                                title: "المقدمة التعريفية لـ هند الناهض ",
                                link: "https://docs.google.com/document/d/16lim6nReJz9eecXrTdUoYTVVIAdOqE3y/edit",
                                type: "word",
                                price: "150",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "100"

                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                                type: "audio",
                                price: "550",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            }
                        ]
                    }
                },
                {
                    key: 'broadcast',
                    title: "برودكاست",
                    content: {
                        showSideThumbnails: true,
                        mainContent: [
                            {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "104"
                            },
                            {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "149",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "39"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "550",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            },
                            {
                                title: "دورة صناعة المحتوى مع هند الناهض",
                                link: "https://www.youtube.com/embed/v=JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "104"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "149",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "39"
                            }, {
                                title: "دورة صناعة المحتوى مع هند الناهض",
                                link: "https://www.youtube.com/embed/v=JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "550",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "104"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "149",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "39"
                            }, {
                                title: "دورة صناعة المحتوى مع هند الناهض",
                                link: "https://www.youtube.com/embed/v=JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "550",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "104"
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "149",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "39"
                            }, {
                                title: "دورة صناعة المحتوى مع هند الناهض",
                                link: "https://www.youtube.com/embed/v=JfycT2vuAWo",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                price: "550",
                                priceUnit: "دينار كويتي",
                                downloadableTimes: "12"
                            }
                        ]
                    }
                },
                {
                    key: 'courses',
                    title: "كورسات",
                    icon: "arrow left",
                    content: {
                        showFullWidth: true,
                        mainContent: [
                            {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/kVO8RpxBgqo/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "24 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "22 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "23 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "20 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "15 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "18 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "12 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "10 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "32 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }, {
                                title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                link: "https://www.youtube.com/embed/Gof2NS5m8VY",
                                type: "video",
                                coverImage: "https://i.ytimg.com/vi/Gof2NS5m8VY/sddefault.jpg",
                                price: "299",
                                priceUnit: "دينار كويتي",
                                videosCount: "30 فيديو",
                                albumDetails: {
                                    introTitle: "وصف الكورس",
                                    introContent: "لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.",
                                    showSideThumbnails: true,
                                    innerContent: [
                                        {
                                            sectionTitle: "",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال2",
                                                    link: "https://www.youtube.com/embed/Tq19F34zXfo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/Tq19F34zXfo/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },
                                        {
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        },{
                                            sectionTitle: "صناعة محتوي تسويقي فعال",
                                            mainContent: [
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "299",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "104"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "149",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "39"
                                                },
                                                {
                                                    title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
                                                    link: "https://www.youtube.com/embed/JfycT2vuAWo",
                                                    type: "video",
                                                    coverImage: "https://i.ytimg.com/vi/pFWAhl02ivc/sddefault.jpg",
                                                    price: "550",
                                                    priceUnit: "دينار كويتي",
                                                    downloadableTimes: "12"
                                                }
                                            ]
                                        }
                                    ],

                                }
                            }

                        ]
                    }
                },
                {
                    key: 'reservation',
                    title: "حجز عيادة (20 دينار كويتي)",
                    content: {}
                }
            ]
        }
    }

    openCourse = (item, activeTabIndex) => {
        let tabsConfig = this.tabsRef.state.tabsConfig;
        tabsConfig[activeTabIndex].open = true

        this.tabsRef.setState({
            tabs: tabsConfig
        })
    }


    render() {
        return (
            <DefaultLayout wrapperClass="home">
                <SiteTabs
                    ref={(ref) => {
                        this.tabsRef = ref
                    }}
                    key={'aaa'}
                    tabsConfig={this.state.tabs}
                    activeTabIndex={0}
                    activeTab={this.state.tabs[0].title}
                    actions={[]}
                    openCourse={this.openCourse}
                />
            </DefaultLayout>
        )
    }
}

