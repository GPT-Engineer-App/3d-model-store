import { Container, Box, Text, VStack, HStack, Button, Image, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "3D Model 1", price: 29.99, image: "https://images.unsplash.com/photo-1666235729156-7fc93d7922ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwMXxlbnwwfHx8fDE3MTYyMjUyMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "3D Model 2", price: 39.99, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwMnxlbnwwfHx8fDE3MTYyMjUyMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "3D Model 3", price: 49.99, image: "https://images.unsplash.com/photo-1467632499275-7a693a761056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwM3xlbnwwfHx8fDE3MTYyMjUyMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <HStack justifyContent="space-between" mb={8}>
        <Text fontSize="3xl" fontWeight="bold">
          3D Model Store
        </Text>
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
      </HStack>
      <VStack spacing={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
            <HStack spacing={4}>
              <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" />
              <VStack align="start">
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text fontSize="lg">${product.price.toFixed(2)}</Text>
                <Button colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
