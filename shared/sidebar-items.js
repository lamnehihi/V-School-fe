const sidebarItems = [
  // {
  //   title: "Summary",
  //   to: "/",
  //   id: "summary"
  // },
  {
    group: {
      title: 'Con của bạn',
      id: 'your-child',
      items: [
        
      ]
    }
  },
  {
    group: {
      title: 'Quản Lý',
      id: 'management',
      items: [
        {
          title: "Phí thu",
          to: "/invoices",
          role: "school"
        },
        {
          title: "Trường học",
          to: "/schools",
          role: "superAdmin"
        },
      ]
    }
  },
  {
    group: {
      title: 'Tài Khoản',
      id: 'account',
      items: [
        {
          title: "Cài đặt",
          to: "/settings",
        },
      ]
    }
  },
];

export default sidebarItems;