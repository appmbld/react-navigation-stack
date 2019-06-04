import * as React from 'react';
import { NavigationProp, SceneDescriptor, NavigationConfig, GesturePauseConfig } from '../../types';
declare type Props = {
    navigation: NavigationProp;
    descriptors: {
        [key: string]: SceneDescriptor;
    };
    navigationConfig: NavigationConfig;
    onTransitionStart?: () => void;
    onGestureBegin?: () => void;
    onPauseGesture?: (config: GesturePauseConfig) => void;
    onGestureCanceled?: () => void;
    onGestureEnd?: () => void;
    screenProps?: unknown;
};
declare class StackView extends React.Component<Props> {
    render(): JSX.Element;
    componentDidMount(): void;
    private configureTransition;
    private getShadowEnabled;
    private getCardOverlayEnabled;
    private getPauseGesture;
    private renderStackviewLayout;
    private handleTransitionEnd;
}
export default StackView;
