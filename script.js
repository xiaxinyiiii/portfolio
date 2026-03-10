// 作品数据
const worksData = {
    // 交互UI设计作品 (2套)
    1: {
        title: "移动端健康应用界面",
        category: "交互UI设计",
        description: "简约风格的医疗健康应用，注重用户体验与视觉美感。整体设计采用清新绿色调，符合健康主题，界面布局直观易用。",
        images: [
            "images/9.jpg", "images/10.jpg", "images/11.jpg",
            "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg"
        ],
        features: ["用户中心设计", "响应式布局", "视觉层次清晰", "无障碍设计"],
        tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    2: {
        title: "企业级管理平台界面",
        category: "交互UI设计",
        description: "现代化企业后台管理系统，注重信息架构与操作效率。采用模块化设计，支持多角色权限管理。",
        images: [
            "images/16.jpg", "images/17.jpg", "images/18.jpg",
            "images/19.jpg", "images/20.jpg", "images/21.jpg", "images/22.jpg"
        ],
        features: ["模块化设计", "权限管理系统", "数据可视化", "操作流程优化"],
        tools: ["Sketch", "Adobe XD", "Principle"]
    },

    // 商业视觉设计作品 (2套)
    3: {
        title: "小米国际部产品视觉系统",
        category: "商业视觉设计",
        description: "完整的品牌视觉识别设计，包含LOGO、VI手册、宣传物料等全套设计。以自然、有机为核心概念，色彩温和亲切。",
        images: [
            "images/5.jpg", "images/6.jpg", "images/7.jpg",
            "images/8.jpg"
        ],
        features: ["品牌调性统一", "视觉冲击力强", "适配多场景", "可持续设计理念"],
        tools: ["Illustrator", "Photoshop", "InDesign"]
    },
    4: {
        title: "科技公司品牌形象",
        category: "商业视觉设计",
        description: "科技企业品牌视觉系统，突出创新与专业特性。采用科技蓝为主色调，展现现代感与专业性。",
        images: [
            "images/8-1.jpg", "images/8-2.jpg", "images/8-3.jpg",
            "images/8-4.jpg"
        ],
        features: ["科技感设计", "品牌一致性", "多平台适配", "国际化视觉语言"],
        tools: ["Illustrator", "Photoshop", "After Effects"]
    },

    // 三维IP设计作品 (2套)
    5: {
        title: "可爱动物角色设计",
        category: "三维IP设计",
        description: "原创三维卡通角色设计，用于儿童教育应用IP形象。角色造型圆润可爱，色彩明亮，富有亲和力。",
        images: [
            "images/10.2.jpg", "images/10.3.jpg", "images/10.4.jpg",
            "images/10.5.jpg", "images/Frame 17.jpg", "images/Frame 18.jpg"
        ],
        features: ["造型独特可爱", "色彩搭配和谐", "适合多角度展示", "易于衍生开发"],
        tools: ["Blender", "ZBrush", "Substance Painter"]
    },
    6: {
        title: "宋代人物角色设计",
        category: "三维IP设计",
        description: "传统历史风格的角色设计，展现优雅细节与材质表现。",
        images: [
            "images/28.jpg", "images/29.jpg", "images/30.jpg", "images/30.1.jpg"
            
        ],
        features: ["机械结构设计", "金属材质表现", "未来感造型", "动态姿势展现"],
        tools: ["Maya", "Substance Painter", "Marvelous Designer"]
    },

    // 二维设计作品 (1套)
    7: {
        title: "布老虎插画系列",
        category: "二维设计",
        description: "手绘风格的数字插画，展现自然风景与生态和谐。系列包含五虎临门主题，传达文化保护意识。",
        images: [
            "images/31.jpg", "images/9.2.jpg", "images/9.3.jpg",
            "images/9.4.jpg", "images/89.jpg", "images/88.jpg", "images/87.jpg", "images/86.jpg", "images/85.jpg", "images/90.jpg"
        ],
        features: ["手绘质感细腻", "色彩自然柔和", "叙事性强", "跨媒体适用"],
        tools: ["Procreate", "Photoshop", "Clip Studio Paint"]
    },

    // 海报设计作品 (3套)
    8: {
        title: "环保主题公益海报",
        category: "海报设计",
        description: "视觉冲击力强的公益海报，呼吁保护地球环境。采用对比手法突出环境问题，引发观者思考。",
        images: [
            "images/海洋1.jpg", "images/海洋2.jpg", "images/海洋3.jpg",
            "images/海洋4.jpg", "images/海洋5.jpg", "images/海洋6.jpg"
        ],
        features: ["信息传达清晰", "视觉冲击力强", "情感共鸣", "多尺寸适配"],
        tools: ["Illustrator", "Photoshop", "After Effects"]
    },
    9: {
        title: "廉政宣传海报",
        category: "海报设计",
        description: "清风润初心，廉洁守底线。",
        images: [
            "images/廉政1.jpg", "images/廉政2.jpg", "images/廉政3.jpg",
            "images/poster2-4.jpg", "images/poster2-5.jpg", "images/poster2-6.jpg"
        ],
        features: ["动感视觉表现", "色彩鲜明活跃", "活动信息突出", "吸引年轻群体"],
        tools: ["Illustrator", "Photoshop", "InDesign"]
    },
    10: {
        title: "沈阳方城海报设计",
        category: "海报设计",
        description: "一朝发祥地，两代帝王都，漫步方城触摸盛京古韵。",
        images: [
            "images/沈阳1.jpg", "images/沈阳2.jpg", "images/沈阳33.jpg",
            "images/poster3-4.jpg", "images/poster3-5.jpg", "images/poster3-6.jpg"
        ],
        features: ["氛围营造突出", "光影对比强烈", "叙事性构图"],
        tools: ["Photoshop", "Cinema 4D", "After Effects"]
    },

    // 工业产品设计作品 (2套)
    11: {
        title: "智能消毒控制器设计",
        category: "工业产品设计",
        description: "人性化的智能控制面板，结合美学与实用功能。采用圆角设计和友好界面，提升用户体验。",
        images: [
            "images/38.jpg", "images/40.jpg",
            "images/41.jpg", "images/42.jpg", "images/43.jpg", "images/44.jpg"
        ],
        features: ["人机工程学设计", "材质工艺考究", "界面友好直观", "节能环保"],
        tools: ["Rhino 3D", "Keyshot", "SolidWorks"]
    },
    12: {
        title: "空中楼盒文创设计",
        category: "工业产品设计",
        description: "以傣家竹楼与孔雀纹样为灵感，打造兼具民族韵味与实用美学的桌面置物文创。",
        images: [
            "images/45.jpg", "images/46.jpg", "images/47.jpg",
            "images/48.jpg", "images/49.jpg"
        ],
        features: ["便携性设计", "防水防尘", "音质优化", "长续航电池"],
        tools: ["Fusion 360", "Keyshot", "AutoCAD"]
    }
};

// 全局变量
let currentSlide = 0;
let currentWorkId = 1;
// 新增：首页轮播全局变量
let homeCarouselIndex = 0;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定作品点击事件（works.html）
    bindWorkItemClicks();

    // 绑定弹窗关闭事件（works.html）
    bindModalClose();

    // 绑定弹窗轮播按钮事件（works.html）
    bindModalCarouselButtons();

    // 新增：绑定首页轮播按钮事件（index.html）
    bindHomeCarouselButtons();

    // 回到顶部按钮
    bindBackToTop();

    // 导航栏滚动效果
    bindNavScroll();

    // 绑定分类跳转滚动调整
    bindCategoryScroll();
});

// ========== 新增：首页轮播核心逻辑 ==========
function bindHomeCarouselButtons() {
    // 获取首页轮播元素
    const homeTrack = document.querySelector('.carousel-track');
    const homeSlides = document.querySelectorAll('.carousel-slide');
    const homePrevBtn = document.querySelector('.prev-btn');
    const homeNextBtn = document.querySelector('.next-btn');
    const homeDots = document.querySelectorAll('.carousel-dot');

    // 如果没有首页轮播元素，直接返回（避免报错）
    if (!homeTrack || homeSlides.length === 0) return;

    // 初始化首页轮播指示点
    function updateHomeDots() {
        homeDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === homeCarouselIndex);
        });
    }

    // 切换首页轮播图
    function moveHomeCarousel(index) {
        // 循环切换逻辑
        homeCarouselIndex = (index + homeSlides.length) % homeSlides.length;
        // 计算偏移量（自适应宽度）
        const slideWidth = homeSlides[0].offsetWidth;
        // 如果宽度为0（可能元素未渲染），延迟重试
        if (slideWidth === 0) {
            setTimeout(() => moveHomeCarousel(index), 50);
            return;
        }
        homeTrack.style.transform = `translateX(-${homeCarouselIndex * slideWidth}px)`;
        // 更新指示点
        updateHomeDots();
    }

    // 上一张按钮
    if (homePrevBtn) {
        homePrevBtn.addEventListener('click', () => {
            moveHomeCarousel(homeCarouselIndex - 1);
        });
    }

    // 下一张按钮
    if (homeNextBtn) {
        homeNextBtn.addEventListener('click', () => {
            moveHomeCarousel(homeCarouselIndex + 1);
        });
    }

    // 指示点点击
    homeDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveHomeCarousel(index);
        });
    });

    // 窗口大小变化时重新计算宽度
    window.addEventListener('resize', () => {
        moveHomeCarousel(homeCarouselIndex);
    });

    // 初始化轮播位置
    setTimeout(() => moveHomeCarousel(homeCarouselIndex), 100);
}

// ========== 原有：作品弹窗相关逻辑（仅修改函数名避免冲突） ==========
// 作品卡片点击事件
function bindWorkItemClicks() {
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        // 给每个作品卡片分配ID
        if (!item.dataset.workId) {
            item.dataset.workId = index + 1;
        }
        
        item.addEventListener('click', function() {
            currentWorkId = this.dataset.workId;
            const work = worksData[currentWorkId] || worksData[1];
            
            // 填充弹窗内容
            document.getElementById('modalTitle').textContent = work.title;
            document.getElementById('modalCategory').textContent = work.category;
            document.getElementById('modalDescription').innerHTML = `<p>${work.description}</p>`;
            
            // 填充设计要点
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = work.features.map(feature => `<li>${feature}</li>`).join('');
            
            // 填充工具
            const toolsList = document.getElementById('modalTools');
            toolsList.innerHTML = work.tools.map(tool => `<li>${tool}</li>`).join('');
            
            // 生成轮播图
            generateCarousel(work.images);
            
            // 显示弹窗
            document.getElementById('workModal').classList.add('show');
            currentSlide = 0;
            updateCarouselSlide();
        });
    });
}

// 生成弹窗轮播图
function generateCarousel(images) {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';
    
    images.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${imgSrc}" alt="作品展示图">`;
        track.appendChild(slide);
    });
}

// 更新弹窗轮播位置
function updateCarouselSlide() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 绑定弹窗轮播按钮事件（修改函数名避免冲突）
function bindModalCarouselButtons() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            // 循环切换逻辑：上一张
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarouselSlide();
        });

        nextBtn.addEventListener('click', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            // 循环切换逻辑：下一张
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarouselSlide();
        });
    }
}

// 绑定弹窗关闭事件
function bindModalClose() {
    const modal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // 关闭按钮
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }
    
    // 点击外部关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// 回到顶部按钮
function bindBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 导航栏滚动效果
function bindNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// 分类跳转滚动调整（解决导航栏遮挡问题）
function adjustCategoryScroll() {
    // 检查URL中是否有hash（分类锚点）
    const hash = window.location.hash;
    if (!hash) return;

    // 找到对应的分类元素
    const targetElement = document.querySelector(hash);
    if (!targetElement) return;

    // 计算导航栏高度（可能随滚动变化，这里取当前高度）
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 80; // 默认80px

    // 计算目标元素的位置
    const elementPosition = targetElement.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - navHeight;
    // 确保滚动位置不小于0
    offsetPosition = Math.max(0, offsetPosition);

    // 如果当前位置与目标位置相差小于5像素，避免不必要的滚动
    const currentPosition = window.pageYOffset;
    if (Math.abs(currentPosition - offsetPosition) < 5) return;

    // 平滑滚动到调整后的位置
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// 绑定分类跳转滚动调整
function bindCategoryScroll() {
    // 页面加载时执行一次（延迟50ms确保DOM完全渲染，同时减少与浏览器自动滚动的冲突）
    setTimeout(adjustCategoryScroll, 50);

    // 监听hash变化（页面内锚点跳转）
    window.addEventListener('hashchange', adjustCategoryScroll);
}