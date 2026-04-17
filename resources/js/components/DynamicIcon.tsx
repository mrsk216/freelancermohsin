import * as Icons from 'lucide-react';

const DynamicIcon = ({ iconName,classes }: { iconName: string, classes:string }) => {
    // 1. Clean the string if it contains brackets like '<Layers />'
    const name = iconName.replace(/[< />]/g, '') as keyof typeof Icons;
    
    // 2. Get the component from the Icons object
    const IconComponent = Icons[name] as React.ElementType;

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null; 
    }

    return <IconComponent className={classes} />;
};

export default DynamicIcon;