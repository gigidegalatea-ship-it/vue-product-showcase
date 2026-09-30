import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

describe("ProductCard", () => {
  it("renderiza correctamente la información del producto", () => {
    const product = {
      id: 1,
      title: "Producto de prueba",
      description: "Descripción del producto de prueba.",
      price: 99.99,
      category: "Categoría de prueba",
      thumbnail: "https://example.com/producto.jpg",
    };

    const wrapper = mount(ProductCard, {
      props: {
        product,
      },
      global: {
        stubs: {
          RouterLink: {
            template: "<a><slot /></a>",
          },
        },
      },
    });

    expect(wrapper.find("img").attributes("src")).toBe(product.thumbnail);
    expect(wrapper.find("img").attributes("alt")).toBe(product.title);
    expect(wrapper.text()).toContain(product.category);
    expect(wrapper.text()).toContain(product.title);
    expect(wrapper.text()).toContain(product.description);
    expect(wrapper.text()).toContain(`$${product.price}`);
    expect(wrapper.text()).toContain("Ver detalle");
  });
});
