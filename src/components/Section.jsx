import React from 'react';

const products = [
    { id: 1, name: 'Red Shirt', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Clothing', brand: 'Brand A', price: 25 },
    { id: 2, name: 'Blue Jeans', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/71930daa64544c6db85a96555e24f8f4.jpg', category: 'Clothing', brand: 'Brand B', price: 45 },
    { id: 3, name: 'Running Shoes', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/e55a96c145fa4b9290fdc2765c141fea.jpg', category: 'Footwear', brand: 'Brand C', price: 60 },
    { id: 4, name: 'Wireless Headphones', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Electronics', brand: 'Brand D', price: 120 },
    { id: 5, name: 'Smartphone', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/46cd7a6f84f34af5a6460a212a8b5d77.jpg', category: 'Electronics', brand: 'Brand E', price: 500 },
    { id: 6, name: 'Backpack', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fa684ad4180d44caa1dd1c1cdfdbd7af.jpg', category: 'Bags', brand: 'Brand F', price: 40 },
    { id: 7, name: 'Coffee Maker', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Appliances', brand: 'Brand G', price: 80 },
    { id: 8, name: 'Leather Wallet', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/7c27f2e920074b779fc36d2fcb593754.jpg', category: 'Fitness', brand: 'Brand I', price: 70 },
    { id: 10, name: 'Sunglasses', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/5d55bbc7cd314a7f964752f0f048eb53.jpg', category: 'Accessories', brand: 'Brand J', price: 50 },
    { id: 11, name: 'Gaming Mouse', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/324648af60414662beb88e756600d667.jpg', category: 'Gaming', brand: 'Brand K', price: 55 },
    { id: 12, name: 'Desk Lamp', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1282944-e962e02ec3fb4c4fb38a0c3d581f33a7.jpg', category: 'Home Decor', brand: 'Brand L', price: 35 },
    { id: 13, name: 'Winter Jacket', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1626517-980e462fb76d4cf98c8ac456684aab3d.jpg', category: 'Clothing', brand: 'Brand M', price: 80 },
    { id: 14, name: 'Yoga Mat', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Fitness', brand: 'Brand N', price: 20 },
    { id: 15, name: 'Kitchen Knife Set', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/30dab4437289450ab7e74550cfb9e09b.jpg', category: 'Kitchen', brand: 'Brand O', price: 90 },
    { id: 16, name: 'Bluetooth Speaker', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fc8467b9480542df85abb633e9bbc17a.jpg', category: 'Electronics', brand: 'Brand P', price: 70 },
    { id: 17, name: 'Hiking Boots', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/fc8467b9480542df85abb633e9bbc17a.jpg', category: 'Footwear', brand: 'Brand Q', price: 100 },
    { id: 18, name: 'Camping Tent', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1345105-6d7817edce614a8db70c00b97de3f7d5.jpg', category: 'Outdoor', brand: 'Brand R', price: 150 },
    { id: 19, name: 'Digital Camera', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Electronics', brand: 'Brand S', price: 300 },
    { id: 20, name: 'Pendant Necklace', image: 'https://skygarden2.azureedge.net/images-thumbnails/products/1296997-bbf6572b4c3644769c0fdf515ddafdcf.jpg', category: 'Jewelry', brand: 'Brand T', price: 40 },
    // ...
];

const Section = () => {
    return (
        <div className="px-[5%] flex flex-col gap-[2%]">
            <div className="flex w-full items-center mb-2 justify-between">
                <p className="text-[20px] font-medium text-black">Picks Just For You</p>
                <button className="bg-black px-2 px-4 py-1.5 text-white text-[14px]">
                    Show All
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-[2%]">
                {products.slice(4, 11).map((product) => (
                    <div key={product.id} className="flex flex-col justify-between gap-[2%] border shadow-md">
                        <img className='w-full' src={product.image} alt={product.name} />
                        <div className="p-4">
                            <p className="font-medium text-black text-[14px]">{product.name}</p>
                            <p className="text-[16px] font-medium text-gray-700 py-2">{product.price}</p>
                            <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full items-center mb-2 justify-between mt-4                  ">
                <p className="text-[20px] font-medium text-black">Popular Right Now</p>
                <button className="bg-black px-2 px-4 py-1.5 text-white text-[14px]">
                    Show All
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-[2%]">
                {products.slice(8, 15).map((product) => (
                    <div key={product.id} className="flex flex-col justify-between gap-[2%] border shadow-md">
                        <img className='w-full' src={product.image} alt={product.name} />
                        <div className="p-4">
                            <p className="font-medium text-black text-[14px]">{product.name}</p>
                            <p className="text-[16px] font-medium text-gray-700 py-2">{product.price}</p>
                            <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full items-center mb-2 justify-between mt-4">
                <p className="text-[20px] font-medium text-black">More Products</p>
            </div>
            <div className="flex mb-6 gap-[2%]">
                <div className="flex w-[250px] pb-4 justify-end bg flex-col gap-[2%] border shadow-md">
                    <p className='text-white text-[26px] font-medium px-4 '>Electronics</p>
                    <button className="bg-gray-100 bg-opacity-70 text-gray-800 mx-4 py-1.5 font-medium">View All</button>
                </div>
                <div className="flex flex-col w-full md:flex-row gap-[2%]">
                    {products.slice(0, 5).map((product) => (
                        <div key={product.id} className="flex w-[250px] flex-col justify-between gap-[2%] border shadow-md">
                            <img className='w-full' src={product.image} alt={product.name} />
                            <div className="p-4">
                                <p className="font-medium text-black text-[14px]">{product.name}</p>
                                <p className="text-[16px] font-medium text-gray-700 py-2">{product.price}</p>
                                <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-6 gap-[2%]">
                <div className="flex w-[250px] pb-4 justify-end bg2 flex-col gap-[2%] border shadow-md">
                    <p className='text-white text-[26px] font-medium px-4 '>Home Appliances</p>
                    <button className="bg-gray-100 bg-opacity-70 text-gray-800 mx-4 py-1.5 font-medium">View All</button>
                </div>
                <div className="flex flex-col w-full md:flex-row gap-[2%]">
                    {products.slice(2, 7).map((product) => (
                        <div key={product.id} className="flex hover:border-black cursor-pointer justify-between w-[250px] flex-col gap-[2%] border shadow-md">
                            <img className='w-full' src={product.image} alt={product.name} />
                            <div className="p-4">
                                <p className="font-medium text-black text-[14px]">{product.name}</p>
                                <p className="text-[16px] font-medium text-gray-700 py-2">{product.price}</p>
                                <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-6 gap-[2%]">
                <div className="flex w-[250px] pb-4 justify-end bg2 flex-col gap-[2%] border shadow-md">
                    <p className='text-white text-[26px] font-medium px-4 '>Home Appliances</p>
                    <button className="bg-gray-100 bg-opacity-70 text-gray-800 mx-4 py-1.5 font-medium">View All</button>
                </div>
                <div className="flex flex-col w-full md:flex-row gap-[2%]">
                    {products.slice(5, 10).map((product) => (
                        <div key={product.id} className="flex hover:border-black justify-between cursor-pointer w-[250px] flex-col gap-[2%] border shadow-md">
                            <img className='w-full' src={product.image} alt={product.name} />
                            <div className="p-4">
                                <p className="font-medium text-black text-[14px]">{product.name}</p>
                                <p className="text-[16px] font-medium text-gray-700 py-2">{product.price}</p>
                                <button className="w-full py-2 bg-black text-white text-[14px] mb-2">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Section;
