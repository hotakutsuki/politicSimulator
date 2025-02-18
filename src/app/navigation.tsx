import { Navigation } from '@toolpad/core/AppProvider';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';

export const NAVIGATION: Navigation = [
    // {
    //     kind: 'header',
    //     title: 'Main items',
    // },
    {
        segment: 'game',
        title: 'Nueva nacion',
        icon: <LayersIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'my nations',
    },
    {
        segment: '[nationId]',
        icon: <DescriptionIcon />,
        children: [
            {
                segment: 'dashboard',
                title: 'Dashboard',
                icon: <DashboardIcon />,
            },
            {
                segment: 'reports',
                title: 'Reports',
                icon: <BarChartIcon />,
                children: [
                    {
                        segment: 'economics',
                        title: 'Economics',
                        icon: <AttachMoneyIcon />,
                    },
                ],
            },
        ]
    }
];
