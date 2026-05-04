// src/mock/blog-detail.mock.ts

export type BlogDetailPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
};

export const blogDetailPosts: Record<string, BlogDetailPost> = {
  "cau-chuyen-sam-ngoc-linh-tra-my": {
    id: 1,
    title: "Câu chuyện về Sâm Ngọc Linh Trà My",
    slug: "cau-chuyen-sam-ngoc-linh-tra-my",
    excerpt:
      "Khám phá hành trình gìn giữ và phát triển Sâm Ngọc Linh từ vùng núi Trà My đến người tiêu dùng hiện đại.",
    date: "Chủ nhật, 1 tháng 1 2026",
    author: "Samtramy",
    category: "Câu chuyện",
    readTime: "6 phút đọc",
    image: "/images/backup/samtramy-co.jpg",
    content: `
      <h2>Từ vùng núi huyền thoại đến cuộc sống hiện đại</h2>
      <p>Nằm ẩn mình trong lòng dãy Trường Sơn, vùng Trà My (Quảng Nam) từ lâu được biết đến như cái nôi của Sâm Ngọc Linh — loại sâm quý hiếm chỉ có tại Việt Nam. Được phát hiện từ những năm 70 của thế kỷ trước, Sâm Ngọc Linh nhanh chóng trở thành niềm tự hào dân tộc, được mệnh danh là "quốc bảo" của nền y học cổ truyền Việt Nam.</p>
      <p>Không giống như những loại sâm khác trên thế giới, Sâm Ngọc Linh mọc ở độ cao từ 1.200m đến 2.100m, trong điều kiện khí hậu ôn hòa, độ ẩm cao và đất đai giàu dinh dưỡng. Chính vì vậy, rễ sâm ở đây tích lũy được hàm lượng saponin — hoạt chất quý giá nhất của sâm — vượt trội hơn nhiều giống sâm khác.</p>

      <h2>Samtramy — Kết nối giá trị truyền thống</h2>
      <p>Thương hiệu Samtramy ra đời từ mong muốn đưa tinh hoa Sâm Ngọc Linh vượt ra khỏi rừng sâu, đến gần hơn với mọi gia đình Việt. Mỗi sản phẩm mang thương hiệu Samtramy đều được nghiên cứu kỹ lưỡng, từ khâu chọn nguyên liệu, sơ chế, bào chế đến đóng gói, nhằm giữ trọn vẹn dưỡng chất quý giá có trong rễ sâm.</p>
      <p>Chúng tôi không chỉ bán sản phẩm. Chúng tôi chia sẻ một phần của thiên nhiên Việt Nam — được chắt lọc, tôn vinh và mang đến cho những ai trân quý sức khỏe của chính mình và người thân.</p>

      <h2>Giá trị cốt lõi của Samtramy</h2>
      <p>Samtramy lấy ba giá trị làm kim chỉ nam cho mọi hoạt động:</p>
      <ul>
        <li><strong>Chính hãng:</strong> Cam kết nguồn gốc rõ ràng, minh bạch từ rừng Trà My đến tay người tiêu dùng.</li>
        <li><strong>Chất lượng:</strong> Quy trình sản xuất nghiêm ngặt theo tiêu chuẩn, giữ trọn hương vị và dưỡng chất tự nhiên.</li>
        <li><strong>Tử tế:</strong> Mỗi sản phẩm đều là một món quà gửi gắm sự quan tâm chân thành đến người nhận.</li>
      </ul>

      <h2>Hành trình tiếp theo</h2>
      <p>Trong những năm tới, Samtramy tiếp tục mở rộng quy mô vùng nguyên liệu, đồng thời đầu tư vào nghiên cứu khoa học để tạo ra những dòng sản phẩm mới, đa dạng hơn — phù hợp với nhu cầu hiện đại mà vẫn giữ nguyên tinh thần của Sâm Ngọc Linh.</p>
      <p>Chúng tôi tin rằng, mỗi một sản phẩm Samtramy không chỉ là một món quà — mà là một lời nhắn gửi về sức khỏe, về sự trân trọng, và về niềm tự hào dân tộc Việt Nam.</p>
    `,
  },
  "vi-sao-sam-ngoc-linh-la-quoc-bao": {
    id: 3,
    title: "Vì sao Sâm Ngọc Linh được xem là quốc bảo?",
    slug: "vi-sao-sam-ngoc-linh-la-quoc-bao",
    excerpt:
      "Tìm hiểu giá trị đặc biệt của Sâm Ngọc Linh và lý do loại sâm này được đánh giá cao tại Việt Nam.",
    date: "Chủ nhật, 15 tháng 2 2026",
    author: "Samtramy",
    category: "Kiến thức",
    readTime: "5 phút đọc",
    image: "/images/ngoc-linh/legend-mountain.jpg",
    content: `
      <h2>Sâm Ngọc Linh — Loại sâm duy nhất của Việt Nam</h2>
      <p>Sâm Ngọc Linh (Panax vietnamensis) là loài sâm quý hiếm được Tổ chức Sở hữu Trí tuệ Thế giới (WIPO) công nhận bản quyền sở hữu trí tuệ cho Việt Nam. Đây là loại sâm duy nhất được phát hiện và phát triển tại Việt Nam, từ đó xứng đáng với danh hiệu "quốc bảo" mà người ta thường nhắc đến.</p>
      <p>So với Sâm Hàn Quốc (Panax ginseng) hay Sâm Mỹ (Panax quinquefolius), Sâm Ngọc Linh có hàm lượng saponin cao hơn đáng kể — lên đến hơn 80 loại saponin (trong khi sâm Hàn Quốc chỉ có khoảng 30 loại). Đây chính là yếu tố then chốt tạo nên sức mạnh bồi bổ vượt trội của loại sâm này.</p>

      <h2>Công dụng được khoa học chứng minh</h2>
      <p>Các nghiên cứu lâm sàng và tiền lâm sàng đã chỉ ra nhiều tác dụng đáng chú ý của Sâm Ngọc Linh:</p>
      <ul>
        <li><strong>Tăng cường miễn dịch:</strong> Saponin trong sâm giúp kích thích hoạt động của tế bào miễn dịch, nâng cao sức đề kháng tự nhiên của cơ thể.</li>
        <li><strong>Chống oxy hóa mạnh mẽ:</strong> Giúp trung hòa gốc tự do, làm chậm quá trình lão hóa tế bào.</li>
        <li><strong>Hỗ trợ chức năng gan:</strong> Các hoạt chất trong sâm có khả năng bảo vệ tế bào gan, hỗ trợ quá trình giải độc.</li>
        <li><strong>Cải thiện sức bền:</strong> Giảm mệt mỏi, tăng sức chịu đựng cho cơ thể trước các tác nhân gây stress.</li>
      </ul>

      <h2>Giá trị kinh tế và bảo tồn</h2>
      <p>Sâm Ngọc Linh không chỉ mang giá trị y học cao mà còn là nguồn tài nguyên kinh tế quý giá cho vùng Tây Nguyên. Tuy nhiên, do nhu cầu tăng cao, loài sâm này đã được đưa vào danh sách bảo tồn nghiêm ngặt. Việc trồng và phát triển Sâm Ngọc Linh bền vững là trách nhiệm của cả cộng đồng và doanh nghiệp.</p>
    `,
  },
  "cach-chon-san-pham-sam-phu-hop": {
    id: 2,
    title: "Cách chọn sản phẩm sâm phù hợp",
    slug: "cach-chon-san-pham-sam-phu-hop",
    excerpt:
      "Gợi ý cách lựa chọn sản phẩm sâm theo nhu cầu sử dụng, làm quà biếu hoặc chăm sóc sức khỏe gia đình.",
    date: "Thứ bảy, 20 tháng 1 2026",
    author: "Samtramy",
    category: "Hướng dẫn",
    readTime: "4 phút đọc",
    image: "/images/backup/samtramy-co.jpg",
    content: `
      <h2>Xác định nhu cầu trước khi chọn</h2>
      <p>Không phải ai cũng cần cùng một loại sản phẩm sâm. Trước khi lựa chọn, hãy tự hỏi: Bạn dùng cho ai? Cho mục đích gì? Và ngân sách của bạn ra sao?</p>
      <p>Nếu bạn biết rõ nhu cầu của mình, việc chọn sản phẩm sẽ trở nên đơn giản và hiệu quả hơn rất nhiều.</p>

      <h2>Dùng cho sức khỏe cá nhân</h2>
      <p>Nếu mục đích chính là bồi bổ sức khỏe cho bản thân, bạn nên cân nhắc các sản phẩm có nồng độ sâm cao, dễ sử dụng hàng ngày như trà sâm túi lọc, nước sâm đóng chai hoặc viên uống tổng hợp. Đây là những dòng sản phẩm phù hợp để dùng lâu dài mà không gây áp lực lên ngân sách.</p>

      <h2>Dùng làm quà biếu</h2>
      <p>Đối với quà biếu — đặc biệt trong các dịp lễ, Tết, họp mặt đối tác — hãy ưu tiên những sản phẩm có bao bì sang trọng, thương hiệu rõ ràng và giá trị cao. Rượu sâm, hộp quà cao cấp hay bộ sản phẩm tặng kèm đều là lựa chọn tuyệt vời. Đừng quên kiểm tra tem chống hàng giả và giấy chứng nhận đi kèm.</p>

      <h2>Những lưu ý quan trọng</h2>
      <ul>
        <li><strong>Kiểm tra nguồn gốc:</strong> Chỉ mua sản phẩm từ nhà cung cấp uy tín, có đầy đủ giấy phép và chứng nhận chất lượng.</li>
        <li><strong>Đọc kỹ thành phần:</strong> Ưu tiên sản phẩm có tỷ lệ sâm cao, ít chất bảo quản và phụ gia.</li>
        <li><strong>Phù hợp độ tuổi:</strong> Một số sản phẩm sâm không khuyến khích cho trẻ em hoặc phụ nữ mang thai.</li>
      </ul>
    `,
  },
};

export function getBlogPost(slug: string): BlogDetailPost | null {
  return blogDetailPosts[slug] ?? null;
}
