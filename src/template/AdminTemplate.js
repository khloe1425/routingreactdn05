import { Route } from "react-router-dom";
import { Fragment, useState,React } from "react";

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {

    const [state, setState] = useState({
        collapsed: false,
    })

    // state = {
    //     collapsed: false,
    //   };

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };



    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            {/* <props.component {...propsRoute} /> */}
            <Layout>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })} */}

                        {state.collapsed ? <MenuUnfoldOutlined style={{color:"white",fontSize:"20px"}} onClick={toggle} /> : <MenuFoldOutlined style={{color:"white",fontSize:"20px"}} onClick={toggle} /> }
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        
                        <props.component {...propsRoute} />

                    </Content>
                </Layout>
            </Layout>

        </Fragment>
    }} />

}



