const formatBusinessType = (property: { pricingInfos: { businessType: string; }; }) => {
    const title = 'Imóvel para';

    return title + property.pricingInfos.businessType === 'SALE' ? 'Venda' : 'Aluguel';
};

export default formatBusinessType;


