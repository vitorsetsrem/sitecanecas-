/* ==========================================================================
   LÓGICA E INTERATIVIDADE - SJB UTENSÍLIOS
   ========================================================================== */

// 1. BANCO DE DADOS DE PRODUTOS (MOCK)
const productsData = [
    {
        id: "copo-caneca-chopp",
        name: "Copo Caneca Chopp Cerveja Rústico",
        category: "canecas",
        desc: "Caneca térmica estilo barril com revestimento em madeira rústica e interior em aço inox de parede dupla. Perfeita para chopp e cervejas, mantendo a temperatura ideal por horas com muita elegância e personalização com seu nome.",
        image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=600&auto=format&fit=crop",
        badge: "Mais Vendido",
        minQty: 1,
        specs: {
            "Material": "Madeira Nobre Tratada & Aço Inox 304",
            "Capacidade": "500ml",
            "Isolamento Térmico": "Dupla parede com barreira térmica",
            "Personalização": "Gravação a laser em chapa de latão/madeira",
            "Pedido Mínimo": "1 unidade"
        }
    },
    {
        id: "caneca-barril-rustico",
        name: "Caneca Barril Rústica Térmica",
        category: "canecas",
        desc: "Caneca de chopp tradicional em formato de barril de carvalho com alça ergonômica. Possui copo interno de inox selado, conservando o frescor da bebida do início ao fim.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
        badge: "Destaque",
        minQty: 1,
        specs: {
            "Material": "Madeira Nobre Maciça & Aço Inox",
            "Capacidade": "450ml",
            "Acabamento": "Verniz marítimo impermeável",
            "Personalização": "Gravação direta na madeira a laser",
            "Pedido Mínimo": "1 unidade"
        }
    },
    {
        id: "suporte-garrafa-600ml",
        name: "Suporte Porta-Garrafas 600ml Rústico",
        category: "suporte-garrafas",
        desc: "Porta-garrafa térmico exclusivo para garrafas de 600ml de cerveja. Design robusto simulando um mini barril de carvalho com anéis metálicos pretos. Um verdadeiro clássico para seu churrasco.",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=600",
        badge: "Campeão de Vendas",
        minQty: 1,
        specs: {
            "Material": "Madeira nobre tratada com anéis de aço carbono",
            "Capacidade": "Garrafas 600ml padrão",
            "Isolamento": "Poliuretano interno injetado",
            "Personalização": "Nome gravado em plaqueta de latão envelhecido",
            "Pedido Mínimo": "1 unidade"
        }
    },
    {
        id: "suporte-longneck-lata",
        name: "Suporte Térmico Long Neck & Lata Rústico",
        category: "suporte-garrafas",
        desc: "Porta-bebidas térmico compacto com design de barril rústico, adaptado para acomodar perfeitamente latas e garrafas long neck. Confortável de segurar e extremamente eficiente.",
        image: "https://images.unsplash.com/photo-1568649929103-28fffe997658?q=80&w=600&auto=format&fit=crop",
        badge: "Novidade",
        minQty: 1,
        specs: {
            "Material": "Madeira de reflorestamento tratada",
            "Capacidade": "Latas 350ml / Long Neck 355ml",
            "Isolamento": "Térmico interno de alto vácuo",
            "Personalização": "Gravação a laser direta de alta definição",
            "Pedido Mínimo": "1 unidade"
        }
    },
    {
        id: "balde-gelo-barril",
        name: "Balde de Gelo Térmico Estilo Barril",
        category: "baldes-gelo",
        desc: "Balde para gelo gigante fabricado em madeira estilo meia-cuba de barril de carvalho com acabamento rústico. A cuba interna é em alumínio com isolamento térmico, mantendo as garrafas trincando de geladas.",
        image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=600&auto=format&fit=crop",
        badge: "Premium",
        minQty: 1,
        specs: {
            "Material": "Madeira de Carvalho tratada & Cuba de Alumínio",
            "Capacidade": "8 Litros (Gela até 5 garrafas 600ml ou 8 latas)",
            "Detalhes": "Alças laterais em corda de sisal rústica",
            "Personalização": "Gravação a laser na madeira ou placa metálica",
            "Pedido Mínimo": "1 unidade"
        }
    },
    {
        id: "porta-copos-tronco",
        name: "Jogo de Porta Copos Tronco Rústico",
        category: "porta-copos",
        desc: "Jogo com 6 porta-copos rústicos fatiados diretamente de troncos de madeira natural. Recebem tratamento selador contra umidade e são gravados a laser com temas de cerveja, nomes ou marcas.",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
        badge: "Ideal para Presente",
        minQty: 1,
        specs: {
            "Material": "Discos de Madeira Natural Tratada",
            "Diâmetro": "9cm a 11cm (variação natural da madeira)",
            "Quantidade": "Conjunto com 6 porta-copos",
            "Proteção": "Selante impermeável de alta durabilidade",
            "Pedido Mínimo": "1 conjunto"
        }
    },
    {
        id: "kit-cerveja-rustico",
        name: "Kit Térmico Cerveja Rústico Premium",
        category: "suporte-garrafas",
        desc: "O kit definitivo para presentear alguém especial. Contém uma Caneca Chopp Barril Térmica e um Suporte Porta-Garrafas 600ml combinando, acondicionados em uma belíssima caixa de presente rústica.",
        image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=600",
        badge: "Kit Presente",
        minQty: 1,
        specs: {
            "Itens Inclusos": "1 Caneca Barril 500ml + 1 Porta-Garrafa 600ml",
            "Material": "Madeira Tratada & Aço Inox",
            "Embalagem": "Caixa rústica em madeira MDF personalizada",
            "Personalização": "Gravação do mesmo nome nos dois itens e na caixa",
            "Pedido Mínimo": "1 kit"
        }
    }
];

// WhatsApp Config
const WHATSAPP_PHONE = "5548998087099";

// 2. RENDERIZAÇÃO DOS PRODUTOS NO GRID
function renderProducts(filter = "all") {
    const grid = document.getElementById("products-grid");
    if (!grid) return;
    
    // Efeito de fade-out suave ao trocar de categoria
    grid.style.opacity = 0;
    
    setTimeout(() => {
        grid.innerHTML = "";
        
        const filteredProducts = filter === "all" 
            ? productsData 
            : productsData.filter(p => p.category === filter);
            
        filteredProducts.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = `product-card reveal delay-${(index % 4) + 1}`;
            
            // Badge HTML se existir
            const badgeHTML = product.badge 
                ? `<span class="product-badge">${product.badge}</span>` 
                : "";
                
            card.innerHTML = `
                ${badgeHTML}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryLabel(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.desc}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm btn-view-details" data-id="${product.id}">
                            Orçamento Rápido
                        </button>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        });
        
        // Ativar animação de reveal nos novos elementos criados
        setTimeout(() => {
            const reveals = grid.querySelectorAll(".reveal");
            reveals.forEach(el => el.classList.add("active"));
        }, 50);
        
        grid.style.opacity = 1;
        
        // Reinicializar os listeners dos botões de detalhes do catálogo recém-renderizado
        initProductButtons();
        
    }, 250);
}

// Retorna o nome da categoria amigável
function getCategoryLabel(category) {
    switch (category) {
        case "canecas": return "Canecas Rústicas";
        case "suporte-garrafas": return "Suportes de Garrafa";
        case "baldes-gelo": return "Baldes de Gelo";
        case "porta-copos": return "Porta Copos";
        default: return "Personalizados";
    }
}

// 3. DIALOG MODAL DE DETALHES & CONSTRUTOR DE MENSAGEM DO WHATSAPP
let currentSelectedProduct = null;

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    currentSelectedProduct = product;
    
    // Preenche os campos do modal
    document.getElementById("modal-product-img").src = product.image;
    document.getElementById("modal-product-img").alt = product.name;
    document.getElementById("modal-product-category").textContent = getCategoryLabel(product.category);
    document.getElementById("modal-product-name").textContent = product.name;
    document.getElementById("modal-product-desc").textContent = product.desc;
    
    // Reseta inputs do orçamento
    document.getElementById("builder-qty").value = product.minQty;
    document.getElementById("builder-qty").min = product.minQty;
    document.getElementById("builder-details").value = "";
    
    // Preenche as especificações
    const specsList = document.getElementById("modal-product-specs");
    specsList.innerHTML = "";
    for (const [key, value] of Object.entries(product.specs)) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${key}:</span> <span>${value}</span>`;
        specsList.appendChild(li);
    }
    
    // Abre o modal
    const modal = document.getElementById("product-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Bloqueia scroll do fundo
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Libera scroll do fundo
    currentSelectedProduct = null;
}

function initProductButtons() {
    const detailButtons = document.querySelectorAll(".btn-view-details");
    detailButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            openProductModal(id);
        });
    });
}

// Envio do formulário do configurador de orçamento do Modal para o WhatsApp
function sendWhatsAppQuote() {
    if (!currentSelectedProduct) return;
    
    const qty = document.getElementById("builder-qty").value || currentSelectedProduct.minQty;
    const details = document.getElementById("builder-details").value.trim() || "Sem observações adicionais";
    
    // Formatação elegante do texto da mensagem do WhatsApp
    let specsText = "";
    for (const [key, value] of Object.entries(currentSelectedProduct.specs)) {
        specsText += `- ${key}: ${value}\n`;
    }
    
    const text = `Olá, equipe SJB Utensílios!
Gostaria de solicitar um orçamento para o seguinte produto personalizado:

*Produto:* ${currentSelectedProduct.name}
*Quantidade estimada:* ${qty} unidades

*Especificações Técnicas:*
${specsText}
*Detalhes/Ideia de Personalização:* 
"${details}"

Gostaria de saber o valor total, as opções de frete para minha região e o prazo estimado de entrega. Obrigado!`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
    
    window.open(url, "_blank", "noopener");
}

// 4. ACCORDION DO FAQ
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Fechar todos os outros
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-answer").style.maxHeight = null;
            });
            
            if (!isActive) {
                item.classList.add("active");
                // Define altura exata dinamicamente para a transição suave de CSS
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

// 5. LIGHTBOX DE GALERIA
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("lightbox-close");
    
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.getAttribute("data-img");
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightboxImg.alt = item.querySelector(".gallery-img").alt;
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });
    
    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    };
    
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Fechar com tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
}

// 6. SCROLL REVEAL (INTERSECTION OBSERVER)
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Parar de observar o elemento após a animação de reveal ocorrer
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Elemento ativa quando 10% de sua área estiver visível
        rootMargin: "0px 0px -50px 0px" // Margem inferior de ativação prévia
    });
    
    reveals.forEach(el => {
        observer.observe(el);
    });
}

// 7. EFEITOS DO HEADER & MENU MOBILE
function initHeaderNavigation() {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Efeito Sticky no Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
        
        updateActiveMenuOnScroll();
    });
    
    // Menu Hamburguer Mobile Toggle
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Fechar menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// Atualiza a classe .active no link de menu de acordo com a posição de rolagem
function updateActiveMenuOnScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentSectionId = "home";
    
    sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSectionId = sec.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

// 8. FORMULÁRIO DE CONTATO (GERAÇÃO DE LEADS INTEGRADA AO WHATSAPP E E-MAIL)
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("form-name").value.trim();
        const email = document.getElementById("form-email").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const productSelect = document.getElementById("form-product");
        const productName = productSelect.options[productSelect.selectedIndex].text;
        const message = document.getElementById("form-message").value.trim();
        
        // Efeito visual de envio no botão
        const btn = document.getElementById("btn-submit-form");
        const originalText = btn.innerHTML;
        btn.innerHTML = "Enviando... Aguarde";
        btn.disabled = true;
        
        // Mensagem formatada para o WhatsApp
        const waText = `Olá! Meu nome é *${name}* (${email}).
Gostaria de solicitar informações comerciais sobre brindes personalizados.

*Interesse:* ${productName}
*WhatsApp:* ${phone}
*Detalhes do Pedido:*
"${message}"`;

        const encodedWaText = encodeURIComponent(waText);
        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedWaText}`;
        
        // Simulação de envio por e-mail no backend e redirecionamento direto para WhatsApp
        setTimeout(() => {
            // Criando modal/banner visual de sucesso ultra moderno
            showSuccessBanner("Orçamento Iniciado! Você está sendo redirecionado para o WhatsApp de atendimento imediato.");
            
            // Reseta formulário
            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
            
            // Redireciona para WhatsApp Comercial após 2 segundos
            setTimeout(() => {
                window.open(waUrl, "_blank", "noopener");
            }, 1800);
            
        }, 1200);
    });
}

// Exibe um banner premium de sucesso
function showSuccessBanner(message) {
    const banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.bottom = "20px";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%) translateY(100px)";
    banner.style.backgroundColor = "var(--bg-card)";
    banner.style.border = "1px solid var(--color-whatsapp)";
    banner.style.color = "#ffffff";
    banner.style.padding = "1.25rem 2.5rem";
    banner.style.borderRadius = "var(--radius-md)";
    banner.style.boxShadow = "var(--shadow-lg)";
    banner.style.zIndex = "3000";
    banner.style.fontFamily = "var(--font-title)";
    banner.style.fontSize = "0.95rem";
    banner.style.fontWeight = "600";
    banner.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    banner.style.textAlign = "center";
    banner.style.maxWidth = "90%";
    banner.style.display = "flex";
    banner.style.alignItems = "center";
    banner.style.gap = "0.75rem";
    
    banner.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-whatsapp)" style="flex-shrink:0;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>${message}</span>
    `;
    
    document.body.appendChild(banner);
    
    // Trigger animation
    setTimeout(() => {
        banner.style.transform = "translateX(-50%) translateY(0)";
    }, 100);
    
    // Remove banner after 5 seconds
    setTimeout(() => {
        banner.style.transform = "translateX(-50%) translateY(100px)";
        setTimeout(() => banner.remove(), 400);
    }, 5000);
}

// 9. EVENTOS DO BOTÃO FLUTUANTE DO WHATSAPP (MICRO-INTERAÇÃO DE NOTIFICAÇÃO)
function initWhatsAppFloatButton() {
    const badge = document.getElementById("whatsapp-badge");
    const floatBtn = document.getElementById("whatsapp-float-btn");
    
    // Simula a chegada de uma mensagem de atendimento automático após 4 segundos de carregamento
    setTimeout(() => {
        if (badge) {
            badge.style.display = "flex";
            badge.style.transform = "scale(1.2)";
            setTimeout(() => {
                badge.style.transform = "scale(1)";
            }, 300);
        }
        
        // Micro-vibração ou pulso sutil no botão flutuante para chamar a atenção
        if (floatBtn) {
            floatBtn.style.transform = "scale(1.15) rotate(5deg)";
            setTimeout(() => {
                floatBtn.style.transform = "scale(1) rotate(0)";
            }, 250);
        }
    }, 4000);
    
    // Remove badge quando o usuário clica
    if (floatBtn) {
        floatBtn.addEventListener("click", () => {
            if (badge) badge.style.display = "none";
        });
    }
}

// 10. INICIALIZAÇÃO GERAL DO SITE
document.addEventListener("DOMContentLoaded", () => {
    // Renderiza inicialmente todos os produtos
    renderProducts("all");
    
    // Inicializa Filtros de Categoria
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-filter");
            renderProducts(category);
        });
    });
    
    // Configura botões de fechar do modal e backdrop
    document.getElementById("modal-close").addEventListener("click", closeProductModal);
    document.getElementById("modal-backdrop").addEventListener("click", closeProductModal);
    document.getElementById("modal-whatsapp-send").addEventListener("click", sendWhatsAppQuote);
    
    // Fechar modal com ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProductModal();
        }
    });
    
    // Inicialização dos módulos de interação
    initHeaderNavigation();
    initFaqAccordion();
    initGalleryLightbox();
    initContactForm();
    initWhatsAppFloatButton();
    
    // Ativa scroll reveal
    initScrollReveal();
});
