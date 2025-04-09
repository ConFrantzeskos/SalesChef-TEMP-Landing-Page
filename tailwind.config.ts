
import type { Config } from "tailwindcss";
import { spacing, borderRadius, shadows } from "./src/styles/design-system";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			spacing: {
				'chef-xs': `${spacing.xs}rem`,    // 4px
				'chef-sm': `${spacing.sm}rem`,     // 8px
				'chef-md': `${spacing.md}rem`,       // 16px
				'chef-lg': `${spacing.lg}rem`,     // 24px
				'chef-xl': `${spacing.xl}rem`,       // 32px
				'chef-2xl': `${spacing['2xl']}rem`,    // 40px
				'chef-3xl': `${spacing['3xl']}rem`,      // 48px
				'chef-4xl': `${spacing['4xl']}rem`,      // 64px
				'chef-5xl': `${spacing['5xl']}rem`,      // 96px
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'chef-sm': borderRadius.sm,   // 6px
				'chef-md': borderRadius.md,   // 12px 
				'chef-lg': borderRadius.lg,   // 16px
				'chef-xl': borderRadius.xl,   // 24px
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px 0 rgba(255,255,255,0.4)" },
          "50%": { boxShadow: "0 0 20px 0 rgba(255,255,255,0.6)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "agent-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        "bounce-x": "bounce-x 1s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "agent-pulse": "agent-pulse 3s ease-in-out infinite"
			},
      backgroundImage: {
        'grid-purple-500': 'linear-gradient(to right, rgb(168 85 247 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(168 85 247 / 0.1) 1px, transparent 1px)',
        'gradient-chef': 'linear-gradient(135deg, rgba(147,51,234,0.9) 0%, rgba(219,39,119,0.9) 100%)',
      },
      boxShadow: {
        'chef': shadows.md,
        'chef-sm': shadows.sm,
        'chef-md': shadows.md,
        'chef-lg': shadows.lg,
        'glow-purple': '0 0 15px 2px rgba(168, 85, 247, 0.3)',
        'glow-white': '0 0 20px 5px rgba(255, 255, 255, 0.2)',
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
