import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data';

const Contact: React.FC = () => {
  const [opened, setOpened] = useState(false);

  // Sitenin sunucusu yok: form, ziyaretçinin e-posta uygulamasını hazır mesajla açar.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get('subject') ?? '');
    const body = `${data.get('message') ?? ''}\n\n${data.get('name') ?? ''}\n${data.get('email') ?? ''}`;
    window.location.href = `mailto:${portfolioData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Side */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">İletişime Geç</h1>
          <p className="text-slate-400 text-lg mb-10">
            Yeni projeler, iş teklifleri veya sadece merhaba demek için bana ulaşabilirsiniz. 
            En kısa sürede dönüş yapacağım.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">Email</h3>
                <a href={`mailto:${portfolioData.email}`} className="text-slate-400 hover:text-primary transition-colors">
                  {portfolioData.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">Konum</h3>
                <p className="text-slate-400">{portfolioData.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">Telefon</h3>
                <a href={`tel:${portfolioData.phone.replace(/[^\d+]/g, '')}`} className="text-slate-400 hover:text-primary transition-colors">
                  {portfolioData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Adınız</label>
                <input 
                  required
                  type="text" 
                  id="name"
                  name="name"
                  autoComplete="name" 
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ahmet Yılmaz"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  required
                  type="email" 
                  id="email"
                  name="email"
                  autoComplete="email" 
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">Konu</label>
              <input 
                required
                type="text" 
                id="subject"
                  name="subject" 
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Proje Teklifi Hakkında"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Mesajınız</label>
              <textarea 
                required
                id="message"
                  name="message" 
                rows={5}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors bg-primary hover:bg-indigo-500 text-white"
            >
              E-posta ile Gönder <Send size={18} aria-hidden="true" />
            </button>
            <p role="status" className="text-sm text-slate-400 text-center min-h-[1.25rem]">
              {opened
                ? 'E-posta uygulamanız açıldı. Açılmadıysa adrese doğrudan yazabilirsiniz.'
                : 'Mesaj, e-posta uygulamanızda hazır olarak açılır.'}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;