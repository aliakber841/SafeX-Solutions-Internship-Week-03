// All site copy lives here, one object per supported language.
// To add a language: add a new top-level key (e.g. "fr") with the same
// shape as "en", then add a matching button in the header in index.html.
const translations = {
  en: {
    meta: {
      title: "Brennan Family Logistics | Warehousing, Fulfillment & Freight",
      logoTag: "Family Logistics"
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact"
    },
    hero: {
      title: "Your Freight. Our Family's Word.",
      subtitle: "Three generations of hands-on warehousing, order fulfillment, and freight management for businesses that want a partner, not just a vendor.",
      cta: "Request a Quote"
    },
    services: {
      title: "What We Do",
      warehousing: { title: "Warehousing & Storage", desc: "Secure, climate-aware storage with real-time inventory visibility across every pallet and SKU." },
      fulfillment: { title: "Order Fulfillment", desc: "Pick, pack, and ship for e-commerce and B2B orders, with same-day cutoffs on most routes." },
      transportation: { title: "Freight & Transportation", desc: "LTL, truckload, and last-mile delivery backed by long-standing carrier relationships." },
      returns: { title: "Returns Management", desc: "Fast, accurate reverse logistics that gets returned stock back into sellable inventory quickly." }
    },
    about: {
      title: "Family-Run Since 1978",
      p1: "Brennan Family Logistics started with one leased warehouse and a handshake. Nearly five decades later, we're still owned and run by the same family, now in its third generation.",
      p2: "That matters to our clients because decisions here are made by people who answer their own phones, not a call center. We grew slowly, on purpose, so we'd never outgrow that.",
      stats: {
        years: "Years in Business",
        sqft: "Sq. Ft. of Warehouse Space",
        shipments: "Shipments Handled Yearly",
        ontime: "On-Time Delivery"
      }
    },
    contact: {
      title: "Get In Touch",
      form: {
        name: "Full Name",
        namePlaceholder: "Jane Smith",
        email: "Email Address",
        emailPlaceholder: "jane@company.com",
        company: "Company",
        message: "How can we help?",
        messagePlaceholder: "Tell us about your shipping or storage needs...",
        submit: "Send Message",
        success: "Thanks! A member of the Brennan team will reach out within one business day.",
        errors: {
          required: "This field is required.",
          email: "Please enter a valid email address."
        }
      }
    },
    footer: { rights: "All rights reserved." }
  },

  es: {
    meta: {
      title: "Brennan Family Logistics | Almacenaje, Cumplimiento y Transporte",
      logoTag: "Logística Familiar"
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto"
    },
    hero: {
      title: "Su Carga. Nuestra Palabra Familiar.",
      subtitle: "Tres generaciones de experiencia práctica en almacenaje, cumplimiento de pedidos y gestión de transporte para empresas que buscan un socio, no solo un proveedor.",
      cta: "Solicitar Cotización"
    },
    services: {
      title: "Lo Que Hacemos",
      warehousing: { title: "Almacenaje y Bodegaje", desc: "Almacenamiento seguro y climatizado con visibilidad de inventario en tiempo real para cada tarima y SKU." },
      fulfillment: { title: "Cumplimiento de Pedidos", desc: "Selección, empaque y envío para pedidos de comercio electrónico y B2B, con cortes el mismo día en la mayoría de las rutas." },
      transportation: { title: "Carga y Transporte", desc: "Carga parcial, carga completa y entrega de última milla respaldadas por relaciones duraderas con transportistas." },
      returns: { title: "Gestión de Devoluciones", desc: "Logística inversa rápida y precisa que reincorpora la mercancía devuelta al inventario vendible sin demora." }
    },
    about: {
      title: "Familiar Desde 1978",
      p1: "Brennan Family Logistics comenzó con una bodega alquilada y un apretón de manos. Casi cinco décadas después, seguimos siendo propiedad de la misma familia, ahora en su tercera generación.",
      p2: "Esto importa a nuestros clientes porque las decisiones aquí las toman personas que contestan su propio teléfono, no un centro de llamadas. Crecimos despacio, a propósito, para nunca perder eso.",
      stats: {
        years: "Años en el Negocio",
        sqft: "Pies² de Espacio de Almacén",
        shipments: "Envíos Gestionados por Año",
        ontime: "Entregas a Tiempo"
      }
    },
    contact: {
      title: "Contáctenos",
      form: {
        name: "Nombre Completo",
        namePlaceholder: "Juana Pérez",
        email: "Correo Electrónico",
        emailPlaceholder: "juana@empresa.com",
        company: "Empresa",
        message: "¿Cómo podemos ayudarle?",
        messagePlaceholder: "Cuéntenos sobre sus necesidades de envío o almacenamiento...",
        submit: "Enviar Mensaje",
        success: "¡Gracias! Un miembro del equipo Brennan se pondrá en contacto dentro de un día hábil.",
        errors: {
          required: "Este campo es obligatorio.",
          email: "Por favor ingrese un correo electrónico válido."
        }
      }
    },
    footer: { rights: "Todos los derechos reservados." }
  }
};