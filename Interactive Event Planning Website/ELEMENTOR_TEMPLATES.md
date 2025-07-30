# Elementor Template Configurations for IRL Interactive Events

## Template Export/Import Instructions

### How to Use These Templates
1. Copy the JSON configurations below
2. Save as `.json` files  
3. Import via **Elementor → Templates → Import Templates**
4. Customize colors, fonts, and content to match your brand

## 1. Header Template Configuration

### Template Name: IRL Events Header
```json
{
  "title": "IRL Events Header",
  "type": "header",
  "conditions": ["include/general"],
  "content": {
    "sections": [
      {
        "type": "section",
        "settings": {
          "stretch_section": "section-stretched",
          "background_background": "classic",
          "background_color": "rgba(0,0,0,0.9)",
          "backdrop_filter_blur": {
            "unit": "px",
            "size": 10
          },
          "position": "fixed",
          "z_index": 999,
          "padding": {
            "top": "15",
            "bottom": "15",
            "left": "0",
            "right": "0",
            "unit": "px"
          }
        },
        "elements": [
          {
            "type": "container",
            "settings": {
              "content_width": "boxed"
            },
            "elements": [
              {
                "type": "column",
                "settings": {
                  "_column_size": 25,
                  "content_position": "middle"
                },
                "elements": [
                  {
                    "type": "image",
                    "settings": {
                      "image": {
                        "url": "path/to/irl-logo.png"
                      },
                      "image_size": "medium",
                      "align": "left",
                      "width": {
                        "unit": "px",
                        "size": 120
                      },
                      "link": {
                        "url": "/",
                        "is_external": false
                      }
                    }
                  }
                ]
              },
              {
                "type": "column",
                "settings": {
                  "_column_size": 50,
                  "content_position": "middle"
                },
                "elements": []
              },
              {
                "type": "column",
                "settings": {
                  "_column_size": 25,
                  "content_position": "middle"
                },
                "elements": [
                  {
                    "type": "button",
                    "settings": {
                      "text": "CALL NOW!",
                      "link": {
                        "url": "/contact",
                        "is_external": false
                      },
                      "size": "md",
                      "typography_typography": "custom",
                      "typography_font_family": "Inter",
                      "typography_font_size": {
                        "unit": "px",
                        "size": 16
                      },
                      "typography_font_weight": "600",
                      "typography_text_transform": "uppercase",
                      "background_background": "gradient",
                      "background_gradient_type": "linear",
                      "background_gradient_angle": {
                        "unit": "deg",
                        "size": 45
                      },
                      "background_gradient_stops": [
                        {
                          "color": "#8B5CF6",
                          "position": {
                            "unit": "%",
                            "size": 0
                          }
                        },
                        {
                          "color": "#EC4899",
                          "position": {
                            "unit": "%",
                            "size": 100
                          }
                        }
                      ],
                      "border_radius": {
                        "unit": "px",
                        "top": 50,
                        "right": 50,
                        "bottom": 50,
                        "left": 50
                      },
                      "box_shadow_box_shadow_type": "yes",
                      "box_shadow_box_shadow": {
                        "horizontal": 0,
                        "vertical": 4,
                        "blur": 15,
                        "spread": 0,
                        "color": "rgba(139, 92, 246, 0.4)"
                      },
                      "button_hover_transition": {
                        "unit": "px",
                        "size": 0.3
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## 2. Homepage Hero Section Template

### Template Name: IRL Hero Section
```json
{
  "title": "IRL Hero Section",
  "type": "section",
  "content": {
    "type": "section",
    "settings": {
      "stretch_section": "section-stretched",
      "height": "min-height",
      "custom_height": {
        "unit": "vh",
        "size": 100
      },
      "content_position": "middle",
      "background_background": "classic",
      "background_color": "transparent",
      "padding": {
        "top": "100",
        "bottom": "100", 
        "left": "50",
        "right": "50",
        "unit": "px"
      }
    },
    "elements": [
      {
        "type": "container",
        "settings": {
          "content_width": "boxed"
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 100,
              "content_position": "middle",
              "text_align": "center"
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "IRL INTERACTIVE",
                  "size": "h1",
                  "typography_typography": "custom",
                  "typography_font_family": "Orbitron",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 72,
                    "sizes": {
                      "tablet": {
                        "unit": "px",
                        "size": 48
                      },
                      "mobile": {
                        "unit": "px", 
                        "size": 36
                      }
                    }
                  },
                  "typography_font_weight": "900",
                  "typography_line_height": {
                    "unit": "em",
                    "size": 1.2
                  },
                  "color": "#FFFFFF",
                  "_css_classes": "neon-text",
                  "_animation": "fadeInUp",
                  "_animation_delay": 0
                }
              },
              {
                "type": "heading",
                "settings": {
                  "title": "EVENTS",
                  "size": "h2", 
                  "typography_typography": "custom",
                  "typography_font_family": "Orbitron",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 48,
                    "sizes": {
                      "tablet": {
                        "unit": "px",
                        "size": 32
                      },
                      "mobile": {
                        "unit": "px",
                        "size": 24
                      }
                    }
                  },
                  "typography_font_weight": "700",
                  "color": "#00FFFF",
                  "_css_classes": "neon-text",
                  "_animation": "fadeInUp",
                  "_animation_delay": 200,
                  "margin": {
                    "top": "-20",
                    "bottom": "30",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "text-editor",
                "settings": {
                  "editor": "<p>Transforming ordinary events into extraordinary experiences with cutting-edge technology and innovative concepts.</p>",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 20,
                    "sizes": {
                      "tablet": {
                        "unit": "px",
                        "size": 18
                      },
                      "mobile": {
                        "unit": "px",
                        "size": 16
                      }
                    }
                  },
                  "color": "#E5E7EB",
                  "width": {
                    "unit": "%",
                    "size": 80
                  },
                  "_animation": "fadeInUp",
                  "_animation_delay": 400,
                  "margin": {
                    "bottom": "40",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "button",
                "settings": {
                  "text": "EXPLORE OUR PROGRAMS",
                  "link": {
                    "url": "/programs",
                    "is_external": false
                  },
                  "size": "lg",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 18
                  },
                  "typography_font_weight": "600",
                  "typography_text_transform": "uppercase",
                  "typography_letter_spacing": {
                    "unit": "px",
                    "size": 1
                  },
                  "background_background": "gradient",
                  "background_gradient_type": "linear",
                  "background_gradient_angle": {
                    "unit": "deg",
                    "size": 45
                  },
                  "background_gradient_stops": [
                    {
                      "color": "#8B5CF6",
                      "position": {
                        "unit": "%",
                        "size": 0
                      }
                    },
                    {
                      "color": "#EC4899", 
                      "position": {
                        "unit": "%",
                        "size": 100
                      }
                    }
                  ],
                  "border_radius": {
                    "unit": "px",
                    "top": 50,
                    "right": 50,
                    "bottom": 50,
                    "left": 50
                  },
                  "_css_classes": "futuristic-btn hover-scale",
                  "_animation": "fadeInUp",
                  "_animation_delay": 600
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## 3. Programs Grid Template

### Template Name: IRL Programs Grid
```json
{
  "title": "IRL Programs Grid",
  "type": "section",
  "content": {
    "type": "section",
    "settings": {
      "stretch_section": "section-stretched",
      "background_background": "classic",
      "background_color": "rgba(0, 0, 0, 0.9)",
      "padding": {
        "top": "100",
        "bottom": "100",
        "left": "50",
        "right": "50",
        "unit": "px"
      },
      "_css_classes": "backdrop-blur"
    },
    "elements": [
      {
        "type": "container",
        "settings": {
          "content_width": "boxed"
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 100,
              "text_align": "center"
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "OUR PROGRAMS",
                  "size": "h2",
                  "typography_typography": "custom",
                  "typography_font_family": "Orbitron",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 48
                  },
                  "typography_font_weight": "700",
                  "color": "#FFFFFF",
                  "_css_classes": "neon-text",
                  "margin": {
                    "bottom": "60",
                    "unit": "px"
                  },
                  "_animation": "fadeInUp"
                }
              }
            ]
          }
        ]
      },
      {
        "type": "container",
        "settings": {
          "content_width": "boxed",
          "flex_direction": "row",
          "flex_wrap": "wrap",
          "flex_gap": {
            "column": "30",
            "row": "30",
            "unit": "px"
          }
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 25,
              "_column_size_tablet": 50,
              "_column_size_mobile": 100
            },
            "elements": [
              {
                "type": "image-box",
                "settings": {
                  "image": {
                    "url": "path/to/gsnl-thumbnail.jpg"
                  },
                  "title_text": "GSNL Game Show Night Live",
                  "description_text": "Interactive game show experience",
                  "link": {
                    "url": "/programs/gsnl-game-show-night-live",
                    "is_external": false
                  },
                  "title_size": "h4",
                  "title_color": "#FFFFFF",
                  "description_color": "#E5E7EB",
                  "position": "below",
                  "background_background": "classic",
                  "background_color": "rgba(0, 0, 0, 0.6)",
                  "border_border": "solid",
                  "border_width": {
                    "unit": "px",
                    "top": 2,
                    "right": 2,
                    "bottom": 2,
                    "left": 2
                  },
                  "border_color": "#00FFFF",
                  "border_radius": {
                    "unit": "px",
                    "top": 15,
                    "right": 15,
                    "bottom": 15,
                    "left": 15
                  },
                  "box_shadow_box_shadow_type": "yes",
                  "box_shadow_box_shadow": {
                    "horizontal": 0,
                    "vertical": 0,
                    "blur": 15,
                    "spread": 0,
                    "color": "rgba(0, 255, 255, 0.3)"
                  },
                  "_css_classes": "hover-scale neon-border",
                  "_animation": "fadeInUp",
                  "_animation_delay": 0,
                  "padding": {
                    "top": "20",
                    "bottom": "20",
                    "left": "20",
                    "right": "20",
                    "unit": "px"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## 4. Service Card Template

### Template Name: IRL Service Card
```json
{
  "title": "IRL Service Card",
  "type": "section",
  "content": {
    "type": "icon-box",
    "settings": {
      "selected_icon": {
        "value": "fas fa-building",
        "library": "fa-solid"
      },
      "view": "default",
      "shape": "circle",
      "primary_color": "#00FFFF",
      "secondary_color": "rgba(0, 255, 255, 0.1)",
      "title": "Corporate Healthcare",
      "description": "Transform your corporate wellness programs with innovative interactive experiences designed to engage and inspire your team.",
      "link": {
        "url": "/services/corporate-healthcare",
        "is_external": false
      },
      "position": "top",
      "title_size": "h3",
      "title_color": "#FFFFFF",
      "description_color": "#E5E7EB",
      "background_background": "classic",
      "background_color": "rgba(0, 0, 0, 0.8)",
      "border_border": "solid",
      "border_width": {
        "unit": "px",
        "top": 2,
        "right": 2,
        "bottom": 2,
        "left": 2
      },
      "border_color": "#00FFFF",
      "border_radius": {
        "unit": "px",
        "top": 20,
        "right": 20,
        "bottom": 20,
        "left": 20
      },
      "box_shadow_box_shadow_type": "yes",
      "box_shadow_box_shadow": {
        "horizontal": 0,
        "vertical": 0,
        "blur": 20,
        "spread": 0,
        "color": "rgba(0, 255, 255, 0.2)"
      },
      "_css_classes": "neon-border hover-scale backdrop-blur",
      "_animation": "fadeInUp",
      "padding": {
        "top": "40",
        "bottom": "40",
        "left": "30",
        "right": "30",
        "unit": "px"
      },
      "margin": {
        "bottom": "30",
        "unit": "px"
      }
    }
  }
}
```

## 5. Contact Form Template

### Template Name: IRL Contact Form
```json
{
  "title": "IRL Contact Form",
  "type": "section",
  "content": {
    "type": "section",
    "settings": {
      "stretch_section": "section-stretched",
      "background_background": "classic",
      "background_color": "rgba(0, 0, 0, 0.9)",
      "padding": {
        "top": "100",
        "bottom": "100",
        "left": "50",
        "right": "50",
        "unit": "px"
      },
      "_css_classes": "backdrop-blur"
    },
    "elements": [
      {
        "type": "container",
        "settings": {
          "content_width": "boxed"
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 60,
              "_column_size_tablet": 100
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "Get In Touch",
                  "size": "h2",
                  "typography_typography": "custom",
                  "typography_font_family": "Orbitron",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 42
                  },
                  "typography_font_weight": "700",
                  "color": "#FFFFFF",
                  "_css_classes": "neon-text",
                  "margin": {
                    "bottom": "30",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "shortcode",
                "settings": {
                  "shortcode": "[contact-form-7 id=\"1\" title=\"Contact form 1\"]",
                  "_css_classes": "futuristic-form"
                }
              }
            ]
          },
          {
            "type": "column",
            "settings": {
              "_column_size": 40,
              "_column_size_tablet": 100,
              "content_position": "top"
            },
            "elements": [
              {
                "type": "icon-list",
                "settings": {
                  "icon_list": [
                    {
                      "text": "123 Future Street\nCyber City, CC 12345",
                      "selected_icon": {
                        "value": "fas fa-map-marker-alt",
                        "library": "fa-solid"
                      },
                      "icon_color": "#00FFFF"
                    },
                    {
                      "text": "(555) 123-EVENTS",
                      "selected_icon": {
                        "value": "fas fa-phone",
                        "library": "fa-solid"
                      },
                      "icon_color": "#00FFFF",
                      "link": {
                        "url": "tel:+15551233836",
                        "is_external": false
                      }
                    },
                    {
                      "text": "info@irlevents.com", 
                      "selected_icon": {
                        "value": "fas fa-envelope",
                        "library": "fa-solid"
                      },
                      "icon_color": "#00FFFF",
                      "link": {
                        "url": "mailto:info@irlevents.com",
                        "is_external": false
                      }
                    },
                    {
                      "text": "@irleventsfun",
                      "selected_icon": {
                        "value": "fab fa-instagram",
                        "library": "fa-brands"
                      },
                      "icon_color": "#EC4899",
                      "link": {
                        "url": "https://instagram.com/irleventsfun",
                        "is_external": true
                      }
                    }
                  ],
                  "space_between": {
                    "unit": "px",
                    "size": 20
                  },
                  "icon_color": "#00FFFF",
                  "text_color": "#FFFFFF",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## 6. Footer Template

### Template Name: IRL Events Footer
```json
{
  "title": "IRL Events Footer",
  "type": "footer",
  "conditions": ["include/general"],
  "content": {
    "type": "section",
    "settings": {
      "stretch_section": "section-stretched",
      "background_background": "classic", 
      "background_color": "rgba(0, 0, 0, 0.95)",
      "padding": {
        "top": "60",
        "bottom": "30",
        "left": "50",
        "right": "50",
        "unit": "px"
      },
      "border_border": "solid",
      "border_width": {
        "unit": "px",
        "top": 2,
        "right": 0,
        "bottom": 0,
        "left": 0
      },
      "border_color": "#00FFFF"
    },
    "elements": [
      {
        "type": "container",
        "settings": {
          "content_width": "boxed"
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 33,
              "_column_size_tablet": 100
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "Contact Info",
                  "size": "h4",
                  "color": "#00FFFF",
                  "margin": {
                    "bottom": "20",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "text-editor",
                "settings": {
                  "editor": "<p>123 Future Street<br>Cyber City, CC 12345</p><p>Phone: (555) 123-EVENTS<br>Email: info@irlevents.com</p>",
                  "color": "#E5E7EB",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter"
                }
              }
            ]
          },
          {
            "type": "column",
            "settings": {
              "_column_size": 33,
              "_column_size_tablet": 100,
              "text_align": "center"
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "Follow Us",
                  "size": "h4",
                  "color": "#00FFFF",
                  "margin": {
                    "bottom": "20",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "social-icons",
                "settings": {
                  "social_icon_list": [
                    {
                      "social": "facebook",
                      "link": {
                        "url": "https://facebook.com/irleventsfun",
                        "is_external": true
                      }
                    },
                    {
                      "social": "instagram",
                      "link": {
                        "url": "https://instagram.com/irleventsfun", 
                        "is_external": true
                      }
                    },
                    {
                      "social": "tiktok",
                      "link": {
                        "url": "https://tiktok.com/@irleventsfun",
                        "is_external": true
                      }
                    }
                  ],
                  "shape": "circle",
                  "color": "custom",
                  "primary_color": "#00FFFF",
                  "secondary_color": "rgba(0, 255, 255, 0.1)",
                  "size": {
                    "unit": "px", 
                    "size": 40
                  }
                }
              }
            ]
          },
          {
            "type": "column",
            "settings": {
              "_column_size": 33,
              "_column_size_tablet": 100,
              "text_align": "right",
              "text_align_tablet": "center"
            },
            "elements": [
              {
                "type": "heading",
                "settings": {
                  "title": "IRL Interactive Events",
                  "size": "h4",
                  "color": "#FFFFFF",
                  "margin": {
                    "bottom": "20",
                    "unit": "px"
                  }
                }
              },
              {
                "type": "text-editor",
                "settings": {
                  "editor": "<p>Transforming ordinary events into extraordinary experiences.</p>",
                  "color": "#E5E7EB",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter"
                }
              }
            ]
          }
        ]
      },
      {
        "type": "container",
        "settings": {
          "content_width": "boxed",
          "margin": {
            "top": "40",
            "unit": "px"
          },
          "border_border": "solid",
          "border_width": {
            "unit": "px",
            "top": 1,
            "right": 0,
            "bottom": 0,
            "left": 0
          },
          "border_color": "rgba(0, 255, 255, 0.3)",
          "padding": {
            "top": "20",
            "unit": "px"
          }
        },
        "elements": [
          {
            "type": "column",
            "settings": {
              "_column_size": 100,
              "text_align": "center"
            },
            "elements": [
              {
                "type": "text-editor",
                "settings": {
                  "editor": "<p>&copy; 2024 IRL Interactive Events. All rights reserved.</p>",
                  "color": "#9CA3AF",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": {
                    "unit": "px",
                    "size": 14
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Custom CSS for Forms

### Contact Form 7 Styling
Add this to **Appearance → Customize → Additional CSS**:

```css
/* Contact Form 7 Futuristic Styling */
.futuristic-form .wpcf7-form-control-wrap {
    position: relative;
    margin-bottom: 20px;
}

.futuristic-form input[type="text"],
.futuristic-form input[type="email"],
.futuristic-form input[type="tel"],
.futuristic-form textarea {
    width: 100%;
    padding: 15px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(0, 255, 255, 0.3);
    border-radius: 10px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    transition: all 0.3s ease;
}

.futuristic-form input[type="text"]:focus,
.futuristic-form input[type="email"]:focus,
.futuristic-form input[type="tel"]:focus,
.futuristic-form textarea:focus {
    outline: none;
    border-color: #00FFFF;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    background-color: rgba(0, 0, 0, 0.9);
}

.futuristic-form input::placeholder,
.futuristic-form textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.futuristic-form .wpcf7-submit {
    background: linear-gradient(45deg, #8B5CF6, #EC4899);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.futuristic-form .wpcf7-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
}

/* Form validation styling */
.futuristic-form .wpcf7-not-valid {
    border-color: #EF4444 !important;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.4);
}

.futuristic-form .wpcf7-validation-errors {
    color: #EF4444;
    background-color: rgba(239, 68, 68, 0.1);
    border: 1px solid #EF4444;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
}

.futuristic-form .wpcf7-mail-sent-ok {
    color: #10B981;
    background-color: rgba(16, 185, 129, 0.1);
    border: 1px solid #10B981;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
}
```

## Usage Instructions

### 1. Import Process
1. **Save Templates**: Copy each JSON configuration and save as individual `.json` files
2. **Import to Elementor**: Go to **Elementor → Templates → Import Templates**
3. **Select Files**: Upload the `.json` files one by one
4. **Apply Templates**: Use the imported templates when building pages

### 2. Customization Tips
- **Colors**: Update the color values to match your exact brand colors
- **Fonts**: Change font families in the typography settings
- **Images**: Replace placeholder image paths with your actual asset paths
- **Content**: Update text content to match your specific services and programs
- **Links**: Update all URL paths to match your site structure

### 3. Template Hierarchy
1. **Header Template**: Apply site-wide via **Theme Builder**
2. **Footer Template**: Apply site-wide via **Theme Builder**  
3. **Section Templates**: Import and use within individual pages
4. **Page Templates**: Create full page layouts combining multiple sections

### 4. Mobile Optimization
All templates include responsive settings:
- **Desktop**: Primary design
- **Tablet**: Adjusted for medium screens
- **Mobile**: Optimized for small screens

Make sure to preview and test each template on different devices after importing.

### 5. Performance Notes
- **Optimize Images**: Compress all images before uploading
- **Minimize Plugins**: Only install necessary Elementor add-ons
- **Cache Setup**: Configure caching for better performance
- **CSS Minification**: Enable CSS optimization in Elementor settings

These templates provide a complete starting point for recreating your IRL Interactive Events website in Elementor while maintaining the futuristic neon aesthetic and professional functionality.