// 作品数据
const worksData = {
    1: {
        title: "移动端健康应用界面",
        category: "交互UI设计",
        description: "简约风格的医疗健康应用，注重用户体验与视觉美感。整体设计采用清新绿色调，符合健康主题，界面布局直观易用。",
        images: [
            "images/6.jpg",
            "images/7.jpg",
            "images/8.jpg"
        ],
        features: ["用户中心设计", "响应式布局", "视觉层次清晰", "无障碍设计"],
        tools: ["Figma", "Adobe XD", "Photoshop"]
    },
    2: {
        title: "有机食品品牌视觉系统",
        category: "商业视觉设计",
        description: "完整的品牌视觉识别设计，包含LOGO、VI手册、宣传物料等全套设计。以自然、有机为核心概念，色彩温和亲切。",
        images: [
            "images/9.jpg",
            "images/10.jpg"
        ],
        features: ["品牌调性统一", "视觉冲击力强", "适配多场景", "可持续设计理念"],
        tools: ["Illustrator", "Photoshop", "InDesign"]
    },
    3: {
        title: "可爱动物角色设计",
        category: "三维IP设计",
        description: "原创三维卡通角色设计，用于儿童教育应用IP形象。角色造型圆润可爱，色彩明亮，富有亲和力。",
        images: [
            "images/43.jpg",
            "images/44.jpg"
        ],
        features: ["造型独特可爱", "色彩搭配和谐", "适合多角度展示", "易于衍生开发"],
        tools: ["Blender", "ZBrush", "Substance Painter"]
    },
    4: {
        title: "自然主题插画系列",
        category: "二维设计",
        description: "手绘风格的数字插画，展现自然风景与生态和谐。系列包含四季主题，传达环境保护意识。",
        images: [
            "images/11.jpg",
            "images/12.jpg"
        ],
        features: ["手绘质感细腻", "色彩自然柔和", "叙事性强", "跨媒体适用"],
        tools: ["Procreate", "Photoshop", "Clip Studio Paint"]
    },
    5: {
        title: "环保主题公益海报",
        category: "海报设计",
        description: "视觉冲击力强的公益海报，呼吁保护地球环境。采用对比手法突出环境问题，引发观者思考。",
        images: [
            "images/13.jpg",
            "images/14.jpg"
        ],
        features: ["信息传达清晰", "视觉冲击力强", "情感共鸣", "多尺寸适配"],
        tools: ["Illustrator", "Photoshop", "After Effects"]
    },
    6: {
        title: "智能家居控制器设计",
        category: "工业产品设计",
        description: "人性化的智能家居控制面板，结合美学与实用功能。采用圆角设计和友好界面，提升用户体验。",
        images: [
            "images/15.jpg",
            "images/16.jpg"
        ],
        features: ["人机工程学设计", "材质工艺考究", "界面友好直观", "节能环保"],
        tools: ["Rhino 3D", "Keyshot", "SolidWorks"]
    }
};

// 全局变量
let currentSlide = 0;
let currentWorkId = 1;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定作品点击事件
    bindWorkItemClicks();
    
    // 绑定弹窗关闭事件
    bindModalClose();
    
    // 绑定轮播按钮事件
    bindCarouselButtons();
    
    // 回到顶部按钮
    bindBackToTop();
    
    // 导航栏滚动效果
    bindNavScroll();
});

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

// 生成轮播图
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

// 更新轮播位置
function updateCarouselSlide() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 绑定轮播按钮事件
function bindCarouselButtons() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            currentSlide = Math.max(0, currentSlide - 1);
            updateCarouselSlide();
        });
        
        nextBtn.addEventListener('click', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            currentSlide = Math.min(slides.length - 1, currentSlide + 1);
            updateCarouselSlide();
        });
    }
}

// 绑定弹窗关闭事件
function bindModalClose() {
    const modal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // 关闭按钮
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// 回到顶部按钮
function bindBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
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
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}
