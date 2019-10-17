// ./postinstall.js
'use strict';

const fs = require('fs');
const path = require('path');

const RN_TSD = path.join(__dirname, '../../../','node_modules/@types/react-native/index.d.ts');
const raw = fs.readFileSync(RN_TSD);

// Fix @types/node conflict
// @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/15960
// @see https://gist.github.com/rawrmaan/be47e71bd0df3f7493ead6cefd6b400c
fs.writeFileSync(
  RN_TSD,
  raw.toString().replace('declare global', 'declare namespace RemovedGlobals')
);

// Add React Native Web Types to @types/react-native.
if (!raw.includes('REACT-NATIVE-WEB TYPINGS')) {
  fs.writeFileSync(
    RN_TSD,
    raw.toString().replace(
      `dismiss: () => void;\n}`,
      `dismiss: () => void;\n}
      //////////////////////////////////////////////////////////////////////////
      //
      //  REACT-NATIVE-WEB TYPINGS
      //
      //////////////////////////////////////////////////////////////////////////
      export interface ImageProperties {
          /**
           * When false, the image will not be draggable
           * @platform web
           */
          draggable?: boolean;
      }

      export interface TextInputProperties {
          /**
           * Indicates whether the value of the control can be automatically completed by the browser
           * @platform web
           */
          autoComplete?: string;
      }

      export interface SwitchProperties {
          /**
           * The color of the thumb grip when the switch is turned on.
           * @platform web
           */
          activeThumbColor?: string;
          /**
           * The color of the track when the switch is turned on.
           * @platform web
           */
          activeTrackColor?: string;
          /**
           * The color of the thumb grip when the switch is turned off.
           * @platform web
           */
          thumbColor?: string;
          /**
           * The color of the track when the switch is turned off.
           * @platform web
           */
          trackColor?: string;
      }

      export interface TextStyle {
          /** @platform web */
          fontFeatureSettings?: string;
          /** @platform web */
          textIndent?: string;
          /** @platform web */
          textOverflow?: string;
          /** @platform web */
          textRendering?: string;
          /** @platform web */
          textTransform?: string;
          /** @platform web */
          unicodeBidi?: string;
          /** @platform web */
          wordWrap?: string;
          /**
           * TextInput only!
           * @platform web
           */
          resize?: string;
      }

      export interface ViewStyle {
          /** @platform web */
          animationDelay?: string;
          /** @platform web */
          animationDirection?: string;
          /** @platform web */
          animationDuration?: string;
          /** @platform web */
          animationFillMode?: string;
          /** @platform web */
          animationName?: string | Array<Object>;
          /** @platform web */
          animationIterationCount?: number | "infinite";
          /** @platform web */
          animationPlayState?: string;
          /** @platform web */
          animationTimingFunction?: string;
          /** @platform web */
          backgroundAttachment?: string;
          /** @platform web */
          backgroundBlendMode?: string;
          /** @platform web */
          backgroundClip?: string;
          /** @platform web */
          backgroundImage?: string;
          /** @platform web */
          backgroundOrigin?: string;
          /** @platform web */
          backgroundPosition?: string;
          /** @platform web */
          backgroundRepeat?: string;
          /** @platform web */
          backgroundSize?: string;
          /** @platform web */
          boxShadow?: string;
          /** @platform web */
          boxSizing?: string;
          /** @platform web */
          clip?: string;
          /** @platform web */
          cursor?: string;
          /** @platform web */
          filter?: string;
          /** @platform web */
          gridAutoColumns?: string;
          /** @platform web */
          gridAutoFlow?: string;
          /** @platform web */
          gridAutoRows?: string;
          /** @platform web */
          gridColumnEnd?: string;
          /** @platform web */
          gridColumnGap?: string;
          /** @platform web */
          gridColumnStart?: string;
          /** @platform web */
          gridRowEnd?: string;
          /** @platform web */
          gridRowGap?: string;
          /** @platform web */
          gridRowStart?: string;
          /** @platform web */
          gridTemplateColumns?: string;
          /** @platform web */
          gridTemplateRows?: string;
          /** @platform web */
          gridTemplateAreas?: string;
          /** @platform web */
          outline?: string;
          /** @platform web */
          outlineColor?: string;
          /** @platform web */
          overflowX?: string;
          /** @platform web */
          overflowY?: string;
          /** @platform web */
          overscrollBehavior?: "auto" | "contain" | "none";
          /** @platform web */
          overscrollBehaviorX?: "auto" | "contain" | "none";
          /** @platform web */
          overscrollBehaviorY?: "auto" | "contain" | "none";
          /** @platform web */
          perspective?: string;
          /** @platform web */
          perspectiveOrigin?: string;
          /** @platform web */
          touchAction?: string;
          /** @platform web */
          transformOrigin?: string;
          /** @platform web */
          transitionDelay?: string;
          /** @platform web */
          transitionDuration?: string;
          /** @platform web */
          transitionProperty?: string;
          /** @platform web */
          transitionTimingFunction?: string;
          /** @platform web */
          userSelect?: string
          /** @platform web */
          visibility?: string;
          /** @platform web */
          willChange?: string;
      }

      export interface TextProperties {
          /**
           * Allows assistive technologies to present and support interaction with the view in a manner that is consistent with user expectations for similar views of that type. For example, marking a touchable view with an accessibilityRole of button. For compatibility with React Native accessibilityTraits and accessibilityComponentType are mapped to accessibilityRole. (This is implemented using ARIA roles.)
           * @platform web
           */
          accessibilityRole?: 'button' | 'heading' | 'label' | 'link' | 'listitem';
      }


      export interface CheckBoxProps extends ViewProperties {
          /**
           * Invoked with the event when the value changes.
           * @platform web
           */
          onChange?: Function;
          /**
           * Invoked with the new value when the value changes.
           * @platform web
           */
          onValueChange?: Function;
          /**
           * The value of the checkbox. If \`true\` the checkbox will be checked.
           * @platform web
           */
          value?: boolean;
          /**
           * If true, the user won't be able to interact with the checkbox.
           * @platform web
           */
          disabled?: boolean;
          /**
           * Customize the color of the checkbox.
           * @platform web
           */
          color?: string;
      }

      export interface CheckBoxStatic extends React.ComponentClass<CheckBoxProps> {}
      export type CheckBox = CheckBoxStatic;
  `
    )
  );
}
