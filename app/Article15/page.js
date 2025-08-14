'use client';

// Import our reusable components and Next.js features
// Note the ../../ path to go up two folders
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function PressReleasePage() {
  return (
    <>
      <Navbar />

      <main translate="no">
        <nav className="nav-breadcrumb">
          <div className="container">
            <div className="breadcrumb" dir="rtl">
              <Link href="/" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>الرئيسية</Link>
              <span>‹</span>
              <Link href="/editions" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>إصدارات</Link>
              <span>‹</span>
              <span>التصريح الصحفي - المؤتمر الوطني الثاني عشر</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">التصريح الصحفي</div>
            <h1 className="article-title">نتائج المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان</h1>
            <p className="article-subtitle">أي فعلية لحقوق الإنسان في ظل التحولات الدولية الراهنة؟</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>المنظمة المغربية لحقوق الإنسان (OMDH)</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                06 مايو 2025
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <div className="hero-image-wrapper">
              <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
            </div>
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p className="lead-paragraph">السيدات والسادة ممثلوا وممثلات الصحافة الوطنية السمعية والبصرية والورقية والإلكترونية</p>
                
                <p>أود باسم رئاسة المنظمة المغربية لحقوق الإنسان أن أرحب بكم/ن وأشكركم/ن على تلبيتكم/ن دعوة الحضور في هذه الندوة الصحفية التي نعقدها في أعقاب انعقاد المؤتمر الوطني الثاني عشر أيام 25-26-27 أبريل 2025 بمدينة الرباط، من أجل تقديم أهم النتائج المنبثقة عن هذا المؤتمر، والآفاق التي يفتحها.</p>

                <p>وقبل ذلك، أود أن أثمن الدور الهام الذي يقوم به السادة الصحفيون والصحفيات و عموم الإعلاميات و الإعلاميين من أجل تغطية الأحداث الوطنية، إخبارا وتعليقا، ومنها المواقف والأنشطة والمبادرات التي يضطلع بها المجتمع المدني، ولا سيما الحركة الحقوقية.</p>

                <p>لقد جاء انعقاد المؤتمر الوطني للمنظمة المغربية لحقوق الإنسان ليتوج مسارا من التحضير انطلق منذ شهر أكتوبر الماضي، حيث تم تشكيل لجان للإعداد المادي والقانوني والتنظيمي والتواصلي قصد تهيئ الظروف الملائمة لتنظيم هذا الحدث الهام في حياة المنظمة التي دأبت على عقده مرة كل ثلاث سنوات، والذي اختير له هذا العام شعار:</p>

                <div className="highlight-box">
                    <h3>&ldquo;أي فعلية لحقوق الإنسان في ظل التحولات الدولية الراهنة؟&rdquo;</h3>
                </div>

                <p>ويجد اختيار هذا الشعار سنده في رغبة المنظمة في التعاطي مع التحديات الكبرى التي أضحى يواجهها النظام الدولي الراعي لحقوق الإنسان حاليا، والتي أصبحت تهدد كل المكتسبات التي حققتها الإنسانية بعد الحرب العالمية الثانية، من سلم وأمن وعدالة دولية، وديمقراطية وحكم دولة القانون، وعدم الإفلات من العقاب، وحقوق الإنسان، واحترام سيادة الدول، والشرعة الدولية... فهذه التحديات الحقوقية الناجمة عن التنامي الكبير لتيارات التطرف والعنصرية والكراهية وعودة النزعات الهوياتية الضيقة، أصبحت تفرض مسؤوليات ومهاما على المجتمع الدولي، وتشكل عاملا لتقوية التضامن والعمل المشترك وسط الحركة الحقوقية عبر العالم، وخاصة داخل منطقة المغرب الكبير، وعلى ضفتي البحر الأبيض المتوسط، من أجل رد الاعتبار اللازم للنظام الدولي لحقوق الإنسان، وصيانة المكتسبات الحقوقية والعمل من أجل تطويرها وإحقاقها وفعليتها.</p>

                <h2>الندوة الموضوعاتية</h2>
                
                <p>كما جرت العادة في مؤتمرات سابقة، تم التمهيد لمؤتمرنا الثاني عشر بعقد ندوة موضوعاتية زوال يوم الجمعة 25 أبريل تركزت هذه المرة حول &ldquo;الحقوق الاقتصادية والاجتماعية والثقافية في السياسات العمومية وسؤال الفعلية&rdquo;، وذلك بهدف طرح وضعية هذه الحقوق انطلاقا من السياسات العمومية التي نهجتها الحكومة في ظل تدبيرها للشأن العام، وقد شارك في تأطيرها مجموعة من الأساتذة الجامعيين والخبراء والفاعلين الحقوقيين الوطنيين والدوليين حيث طرحت مجموعة من الأسئلة والاشكالات المرتبطة بوضعية الحقوق الاقتصادية والاجتماعية والثقافية، في ظل سؤال مركزي مرتبط بمدى فعليتها في السياسات العمومية.</p>

                <p>وقد أكدت الندوة على على ضرورة التزام الحكومة بإعمال سياسات عمومية ترمي إلى حماية الحقوق الاقتصادية والاجتماعية والثقافية وضمان فعليتها، وفقا لالتزامات المغرب الدولية والوطنية المؤطرة بالمواثيق والاتفاقيات والصكوك والدستور.</p>

                <h2>الجلسة الافتتاحية</h2>
                
                <p>وبعد الندوة الموضوعاتية، شهدت الجلسة الافتتاحية للمؤتمر حضورا وازنا لممثلين عن المؤسسات الوطنية والبعثات الديبلوماسية، وممثلين عن قطاعات حكومية وجمعيات ومنظمات حقوقية ومدنية صديقة، وممثلة عن المفوضية السامية لشؤون اللاجئين بالمغرب، وقيادات العديد من الأحزاب السياسية والمركزيات النقابية، إلى جانب سفير دولة فلسطين السيد جمال الشوبكي الذي ألقى كلمة بالمناسبة استعرض فيها الوضعية بالأراضي الفلسطينية المحتلة وآثار العدوان الإسرائيلي على قطاع غزة، مذكرا بضرورة أن يتحمل المنتظم الدولي مسؤوليته اتجاه المدنيين بقطاع غزة والضفة الغربية، ومؤكدا على أن الشعب الفلسطيني سيواصل نضاله المشروع المستند إلى الشرعة الدولية، وسيمضي قدما نحو تحقيق تطلعاته العادلة في الحرية والعودة وبناء دولته المستقلة ذات السيادة وعاصمتها القدس الشريف.</p>

                <p>وقد تميزت الجلسة الافتتاحية كذلك بكلمات لمنظمات حقوقية دولية وإقليمية صديقة، وهي الفيدرالية الدولية لحقوق الإنسان، والشبكة الأورومتوسطية للحقوق، علاوة على المنظمة العربية لحقوق الإنسان.</p>

                <div className="highlight-box">
                    <h4>التكريم</h4>
                    <p>كما شهدت الجلسة الافتتاحية تكريم ست فعاليات وشخصيات حقوقية:</p>
                    <ul>
                        <li>الأستاذ عبد العزيز بناني الرئيس السابق للمنظمة المغربية لحقوق الإنسان</li>
                        <li>الفقيد خالد الناصري الرئيس السابق للمنظمة</li>
                        <li>الفقيد أحمد شوقي بنيوب أحد قادة المنظمة والعضو بهيئة الانصاف والمصالحة والمندوب الوزاري السابق لحقوق الإنسان</li>
                        <li>الأستاذة عايدة حشاد القيادية السابقة بالمنظمة وأمينة مالها سابقا</li>
                        <li>الأستاذة فاطنة سرحان كاتبة فرع المنظمة بالدار البيضاء وعضو مجلسها الوطني سابقا والمناضلة في مجال الحقوق الإنسانية للنساء</li>
                        <li>الأستاذة مليكة غزالي عضو المكتب الوطني للمنظمة سابقا والمناضلة في مجال حقوق السجناء الأحداث والتربية على حقوق الإنسان</li>
                    </ul>
                </div>

                <h2>أشغال المؤتمر</h2>
                
                <p>وتواصلت أشغال المؤتمر في إطار جلسات داخلية يومي السبت والأحد 26 و27 أبريل 2025، استهلت بانتخاب الأجهزة المسيرة للمؤتمر والمتمثلة في اللجان المكلفة بالرئاسة وفرز العضوية، والافتحاص المالي، والبيان العام، قبل أن تتواصل بعرض التقريرين الأدبي والمالي من طرف المكتب التنفيذي، ومناقشتهما والتصويت عليهما بالإجماع.</p>

                <p>ثم انكب المؤتمر في إطار جلسته الداخلية الثانية على المناقشة والمصادقة بالإجماع على مشروع التعديلات المقترحة على القانون الأساسي للمنظمة، قبل أن يتداول ويصادق في إطار جلسته الثالثة والأخيرة على مشروع البيان العام الصادر عن المؤتمر ويصوت في اقتراع سري بأغلبية ساحقة على لائحة أعضاء وعضوات المجلس الوطني (برلمان المنظمة)، المقدمة من طرف وكيلها رئيس المنظمة الجديد المحامي الأستاذ نوفل البعمري، الذي سيترأس المنظمة خلال الولاية 2025-2029.</p>

                <h2>أبرز نتائج المؤتمر</h2>

                <h3>أولا: على الصعيد التنظيمي</h3>
                
                <p>يحضر المؤتمر الوطني، وفق القانون الأساسي للمنظمة، أعضاء المجلس الوطني السابق للمنظمة (55 عضوا)، إلى جانب أعضاء مكاتب الفروع المنتخبين في إطار جموع عامة للفروع تم عقدها خلال شهري فبراير ومارس 2025، كما يحضرها مؤتمرون ومؤتمرات جرى انتخابهم/ن في تلك المناسبة.</p>

                <p>وقد صادق المؤتمر الثاني عشر بالتصويت السري وبأغلبية ساحقة على لائحة المجلس الوطني الجديد الذي يضم 61 عضوا، روعي في ترشيحهم/ن عدد من المعايير تتضمن الاستمرارية والتجديد ومقاربة النوع والتشبيب والكفاءة.</p>

                <h3>ثانيا: على الصعيد القانوني</h3>
                
                <div className="highlight-box">
                    <h4>التعديلات على القانون الأساسي:</h4>
                    <ul>
                        <li>رفع الولاية من 3 إلى 4 سنوات</li>
                        <li>رفع عدد أعضاء وعضوات المجلس الوطني إلى 61 عضوا على الأكثر، بدل 51 عضوا</li>
                        <li>توسيع عدد حالات التنافي في المجلس الوطني والمكتب التنفيذي ومكاتب الفروع والجهات</li>
                        <li>توحيد العضوية بحذف العضوية المساندة</li>
                        <li>إنشاء هيكل تنظيمي جديد يسمى &ldquo;لجنة كتاب الجهات والفروع&rdquo; تجتمع ثلاث مرات في السنة، وكلما اقتضت الضرورة ذلك</li>
                        <li>إمكانية تأسيس فروع للمنظمة من طرف مغاربة العالم، وكذا بالنسبة لنقط الارتكاز</li>
                    </ul>
                </div>

                <h3>ثالثا: على الصعيد الحقوقي</h3>
                
                <p>عرف المؤتمر نقاشات غنية تناولت أهم القضايا والمستجدات الحقوقية على الصعيد الدولي والإقليمي والوطني، حيث تطرق البيان العام الى جزء منها. ونستعرض أهمها في ما يلي:</p>

                <h4>على المستوى الوطني:</h4>
                <div className="highlight-box">
                    <ul>
                        <li>تثمين المكتسبات الحقوقية بالمغرب، والتي همت مجالات متعددة دستورية، تشريعية، وسياسية، ولكن مع تسجيل ضعف فعلية الحقوق الاقتصادية والاجتماعية والثقافية مما يتطلب ضرورة وضع سياسات عمومية جديدة كفيلة بضمان وحماية حقوق الانسان عموما بما فيها الحقوق الاقتصادية والاجتماعية والثقافية</li>
                        <li>التسجيل بإيجابية العفو الملكي على مجموعة من الصحفيين والمدونين ومعتقلي الحركات الاحتجاجية والاجتماعية، مع التماس أن يشمل العفو باقي معتقلي الحركات الاحتجاجية والاجتماعية</li>
                        <li>المطالبة بفتح حوارات مع الساكنة لحل المشاكل الاجتماعية المحلية وفقا لمقاربة تشاركية</li>
                        <li>الإشادة بالمبادرة المغربية للحكم الذاتي لما يضمنه من حقوق لفائدة ساكنة المنطقة</li>
                        <li>إدانة الانتهاكات الجسيمة لحقوق الإنسان بمخيمات تندوف، مع دعوة الأطراف الإقليمية إلى تحمل مسؤوليتها في حماية المحتجزين بالمخيمات وضمان كافة حقوقهم</li>
                        <li>المطالبة بتسريع باستكمال مسطرة التشريع المتعلق بمنظومة الحقوق والحريات</li>
                        <li>التأكيد عل ضرورة احترام حرية المواطنات والمواطنين في الرأي والتعبير عبر مختلف الوسائط في إطار القانون، واحترام الحق في التجمع والتظاهر السلميين</li>
                        <li>التسريع بوضع سياسة عمومية مندمجة ودامجة للشباب اعتمادا على مقاربة قائمة على فعلية حقوق الشباب</li>
                    </ul>
                </div>

                <h4>على المستوى الإقليمي:</h4>
                <div className="highlight-box">
                    <ul>
                        <li>المطالبة بتعزيز دعامات الديمقراطية وضمانات حقوق الانسان بإفريقيا، وترسيخ بناء دولة الحق والقانون، وحل النزاعات الإقليمية بطرق سلمية، واحترام سيادة الدول ووحدتها الترابية</li>
                        <li>المطالبة بالانفتاح على مختلف الآليات الحقوقية الإفريقية</li>
                        <li>التعبير عن القلق من التراجعات التي شهدها الوضع الحقوقي في عدد من الدول المغاربية، مع المطالبة بعدم استهداف المدافعات والمدافعين عن حقوق الإنسان تحت ذريعة أسباب سياسية</li>
                    </ul>
                </div>

                <h4>على المستوى الدولي:</h4>
                <div className="highlight-box special-calls">
                    <ul>
                        <li>تسجيل التحولات الدولية التي يعرفها عالم اليوم، والتي تمس قيم العدالة والحق في الحياة والمساواة، وتستند إلى منطق القوة بدل منطق القانون، مما يعتم واجهة الدفاع عن حقوق الإنسان</li>
                        <li>المطالبة بإصلاح منظومة الأمم المتحدة وتأهيل مؤسساتها، بما يمكنها من إحلال السلم والأمن الدوليين، وحماية الحقوق والحريات الأساسية</li>
                        <li>ضرورة العمل على مواجهة تنامي خطاب التشكيك في منظومة وقيم ومؤسسات حقوق الإنسان، والخطابات الشعبوية</li>
                        <li>وضع حد للانتهاكات الحقوقية الجسيمة والممنهجة ولجرائم الإبادة الجماعية التي يتعرض لها المدنيون بفلسطين المحتلة، مع مطالبة المجتمع الدولي بتحمل مسؤوليته الكاملة في حماية المدنيين العزل ووقف حرب الإبادة التي يتعرض لها الشعب الفلسطيني</li>
                        <li>التأكيد على كون إحلال السلام في المنطقة رهين بإقامة دولة فلسطين المستقلة وعاصمتها القدس الشرقية على حدود 67</li>
                    </ul>
                </div>

                <h4>التوصيات للقيادة الجديدة:</h4>
                <div className="highlight-box">
                    <ul>
                        <li>وضع استراتيجية عمل طيلة الولاية الانتدابية لأجهزة المنظمة</li>
                        <li>وضع برامج منسجمة لتفعيل استراتيجية العمل، مع تجويد آليات التنفيذ</li>
                        <li>إعلان التعبئة من أجل ضمان انخراط جميع مكونات المنظمة في تفعيل استراتيجيتها</li>
                    </ul>
                </div>

                <p className="conclusion"><strong>في الختام،</strong> تلكم كانت أهم المخرجات التي أفضت اليها أشغال المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، وفي نهاية هذا التصريح أجدد للجميع شكر المنظمة على حضوركم/ن واهتمامكم/ن بنتائج هذا المؤتمر. ونحن رهن الإشارة للجواب على ما تنوون طرحه من أسئلة ذات الصلة. فمرحبا بكم وبكن.</p>

            </div>
          </div>
        </article>

        <section className="author-section">
          <div className="container">
            <div className="author-card" dir="rtl">
              <div className="author-avatar-wrapper">
                <Image src="/omdhlogo.png" alt="شعار المنظمة المغربية لحقوق الإنسان" className="author-avatar" width={80} height={80}/>
              </div>
              <div className="author-info">
                <h4>المنظمة المغربية لحقوق الإنسان (OMDH)</h4>
                <p className="author-title">التصريح الصحفي</p>
                <p className="author-bio">
                  التصريح الصحفي الخاص بنتائج المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان الذي انعقد بمدينة الرباط أيام 25-26-27 أبريل 2025.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* CSS Variables for consistent theming */
        :root {
          --primary-color: #1957a6;
          --primary-light: #e8f1fd;
          --primary-dark: #134080;
          --text-dark: #1a1a1a;
          --text-medium: #4a5568;
          --text-light: #718096;
          --light-bg: #f8fafc;
          --border-light: #e2e8f0;
          --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --gradient-primary: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          --gradient-light: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        /* Global container styling */
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Enhanced breadcrumb navigation */
        .nav-breadcrumb {
          padding: 20px 0;
          background: var(--gradient-light);
          border-bottom: 1px solid var(--border-light);
          backdrop-filter: blur(10px);
        }

        .breadcrumb {
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
        }

        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .breadcrumb a:hover {
          color: var(--primary-dark);
          background-color: var(--primary-light);
          transform: translateY(-1px);
        }

        .breadcrumb span {
          margin: 0 12px;
          color: var(--text-light);
          font-weight: 300;
        }

        /* Enhanced article header */
        .article-header {
          background: var(--gradient-light);
          padding: 60px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .article-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .article-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-color);
          background: var(--primary-light);
          padding: 8px 20px;
          border-radius: 25px;
          margin-bottom: 24px;
          border: 2px solid rgba(25, 87, 166, 0.1);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .article-category:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .article-title {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--text-dark);
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: var(--text-medium);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .article-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          font-weight: 500;
        }

        .meta-divider {
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
          border-radius: 1px;
        }

        /* Enhanced hero image section */
        .article-hero {
          margin: -40px auto 60px;
          max-width: 900px;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transition: all 0.4s ease;
        }

        .hero-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(25, 87, 166, 0.1) 0%, transparent 50%);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-image-wrapper:hover::before {
          opacity: 1;
        }

        .hero-image {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
        }

        /* Enhanced article content */
        .article-content {
          background-color: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .content-body {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-dark);
          font-weight: 400;
        }

        .lead-paragraph {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 2.5rem;
          padding: 20px;
          background: var(--primary-light);
          border-radius: 12px;
          border-left: 4px solid var(--primary-color);
          position: relative;
        }

        .content-body p, .content-body li {
          margin-bottom: 1.75rem;
        }

        .content-body ul {
          padding-right: 24px;
          margin-bottom: 2rem;
          list-style: none;
        }

        .content-body ul li {
          position: relative;
          padding-right: 24px;
        }

        .content-body ul li::before {
          content: '✓';
          position: absolute;
          right: 0;
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1.1em;
        }

        .content-body h2, .content-body h3, .content-body h4 {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-weight: 700;
          margin: 3rem 0 1.5rem;
          color: var(--text-dark);
          position: relative;
        }

        .content-body h2 {
          font-size: 2rem;
          color: var(--primary-color);
          padding-bottom: 12px;
          border-bottom: 3px solid var(--primary-light);
          margin-bottom: 2rem;
        }

        .content-body h3 {
          font-size: 1.6rem;
        }

        .content-body h4 {
          font-size: 1.3rem;
          color: var(--primary-color);
          margin-top: 2.5rem;
        }

        /* Enhanced highlight boxes */
        .highlight-box {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          border: 1px solid var(--border-light);
          border-right: 5px solid var(--primary-color);
          border-radius: 12px;
          padding: 32px;
          margin: 40px 0;
          box-shadow: var(--shadow-md);
          position: relative;
          transition: all 0.3s ease;
        }

        .highlight-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .highlight-box::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 0 12px 12px 0;
        }

        .special-calls {
          background: linear-gradient(135deg, var(--primary-light) 0%, #ffffff 100%);
          border-right-color: var(--primary-dark);
        }

        .special-calls::before {
          background: linear-gradient(to bottom, var(--primary-color), var(--primary-dark));
        }

        .highlight-box ul {
          margin: 0;
          padding-right: 0;
        }

        .highlight-box ul li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(25, 87, 166, 0.1);
          transition: all 0.2s ease;
        }

        .highlight-box ul li:last-child {
          border-bottom: none;
        }

        .highlight-box ul li:hover {
          background-color: rgba(25, 87, 166, 0.05);
          border-radius: 8px;
          padding: 8px 12px;
          margin: 0 -12px;
        }

        .conclusion {
          font-size: 1.2rem;
          padding: 24px;
          background: var(--gradient-light);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          margin-top: 3rem;
          font-weight: 500;
          line-height: 1.7;
        }

        /* Enhanced author section */
        .author-section {
          background: var(--gradient-light);
          padding: 60px 0;
          border-top: 1px solid var(--border-light);
        }

        .author-card {
          background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .author-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .author-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .author-avatar-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .author-avatar-wrapper::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: var(--gradient-primary);
          border-radius: 50%;
          z-index: -1;
        }

        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          background-color: white;
          padding: 4px;
          transition: transform 0.3s ease;
        }

        .author-card:hover .author-avatar {
          transform: scale(1.05);
        }

        .author-info {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .author-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .author-info .author-title {
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .author-info .author-bio {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-medium);
          font-weight: 400;
        }

        /* Responsive design improvements */
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }

          .article-header {
            padding: 40px 0 60px;
          }

          .article-title {
            font-size: 2rem;
          }

          .article-subtitle {
            font-size: 1.1rem;
          }

          .article-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-divider {
            display: none;
          }

          .article-hero {
            margin: -30px auto 40px;
          }

          .content-body {
            font-size: 1.05rem;
          }

          .content-body h2 {
            font-size: 1.6rem;
          }

          .highlight-box {
            padding: 24px;
            margin: 30px 0;
          }

          .author-card {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }

          .author-avatar {
            width: 100px;
            height: 100px;
          }
        }

        /* Smooth scrolling and focus states */
        * {
          scroll-behavior: smooth;
        }

        *:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .nav-breadcrumb,
          .author-section {
            display: none;
          }
          
          .article-content {
            padding: 20px 0;
          }
          
          .highlight-box {
            break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}