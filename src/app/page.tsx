import Image from "next/image";
import { Coffee, MapPin, Clock, Phone, ChevronRight, Star, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-amber-700" />
              <span className="text-2xl font-bold tracking-tighter text-stone-900">Lumina<span className="text-amber-700">Coffee</span></span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Trang chủ</a>
              <a href="#about" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Về chúng tôi</a>
              <a href="#menu" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Thực đơn</a>
              <a href="#contact" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Liên hệ</a>
            </nav>
            <button className="hidden md:block bg-stone-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-amber-800 transition-colors">
              Đặt bàn ngay
            </button>
            <button className="md:hidden p-2 text-stone-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      <main className="grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000"
              alt="Coffee shop interior"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-stone-100 to-stone-50/50" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-6">
                Tuyệt tác cà phê thủ công
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-tight mb-6">
                Khởi đầu ngày mới với <span className="text-amber-700">hương vị đích thực</span>
              </h1>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl">
                Tận hưởng không gian ấm cúng và những ly cà phê được pha chế tỉ mỉ từ những hạt cà phê hảo hạng nhất. Nơi lý tưởng để làm việc, gặp gỡ hay đơn giản là tìm một chốn bình yên.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#menu" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-amber-700 hover:bg-amber-800 transition-all duration-200 shadow-lg shadow-amber-900/20">
                  Xem Thực Đơn
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-stone-900 bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Tại sao chọn Lumina Coffee?</h2>
              <p className="text-stone-600 text-lg">Chúng tôi tin rằng một ly cà phê ngon không chỉ nằm ở hương vị, mà còn ở trải nghiệm mà nó mang lại.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Star className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Hạt Cà Phê Hảo Hạng</h3>
                <p className="text-stone-600 leading-relaxed">Được tuyển chọn kỹ lưỡng từ những vùng trồng cà phê nổi tiếng, rang xay trực tiếp để giữ trọn hương vị.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Coffee className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Pha Chế Chuyên Nghiệp</h3>
                <p className="text-stone-600 leading-relaxed">Đội ngũ Barista giàu kinh nghiệm, đam mê và tận tâm trong từng giọt cà phê mang đến cho bạn.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Không Gian Ấm Cúng</h3>
                <p className="text-stone-600 leading-relaxed">Thiết kế hiện đại xen lẫn nét cổ điển, góc làm việc yên tĩnh và khu vực trò chuyện thoải mái.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section id="menu" className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Thực Đơn Nổi Bật</h2>
                <p className="text-stone-600 text-lg">Khám phá những thức uống được yêu thích nhất tại Lumina</p>
              </div>
              <a href="#" className="hidden md:flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors">
                Xem toàn bộ thực đơn <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Espresso Đậm Đặc", price: "45.000đ", desc: "Hương vị nguyên bản, mạnh mẽ", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600" },
                { name: "Latte Nghệ Thuật", price: "55.000đ", desc: "Sự kết hợp hoàn hảo giữa espresso và sữa", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600" },
                { name: "Cold Brew Mát Lạnh", price: "60.000đ", desc: "Ủ lạnh 16 tiếng, nhẹ nhàng sảng khoái", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600" },
                { name: "Matcha Latte", price: "65.000đ", desc: "Trà xanh Nhật Bản thượng hạng", img: "https://images.unsplash.com/photo-1515823662972-da6a2b4d3002?auto=format&fit=crop&q=80&w=600" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                      <span className="font-semibold text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
               <a href="#" className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors">
                Xem toàn bộ thực đơn <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-stone-900">
            <Image 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
              alt="Coffee beans"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sẵn sàng để thưởng thức?</h2>
            <p className="text-xl text-stone-300 mb-10">Đến ngay Lumina Coffee hôm nay hoặc đặt trước để có vị trí đẹp nhất.</p>
            <button className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/50">
              Đặt Bàn Ngay
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-stone-950 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Coffee className="w-8 h-8 text-amber-600" />
                <span className="text-2xl font-bold tracking-tighter">Lumina<span className="text-amber-600">Coffee</span></span>
              </div>
              <p className="mb-6 leading-relaxed">Nơi đánh thức mọi giác quan với những ly cà phê thủ công tinh tế. Không gian lý tưởng cho những ý tưởng sáng tạo.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Liên Hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>123 Đường Cà Phê, Quận 1,<br />TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>0123 456 789</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Giờ Mở Cửa</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Thứ 2 - Thứ 6</p>
                    <p>07:00 - 22:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-white font-medium">Thứ 7 - Chủ Nhật</p>
                    <p>08:00 - 23:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Nhận Tin Tức</h3>
              <p className="mb-4">Đăng ký để nhận thông tin ưu đãi mới nhất.</p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-600"
                />
                <button className="bg-amber-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-amber-700 transition-colors">
                  Đăng Ký
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Lumina Coffee. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
