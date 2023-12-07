import "./CompanyCard.css";
import { FC } from "react";
import FlexBox from "../../../components/common/box/FlexBox";
import Text from "../../../components/common/style/Text";
import { TypographyStyle } from "../../../components/common/style/interface/Typography";
import { Colors } from "../../../components/common/style/interface/Colors";
import Image from "../../../components/common/style/Image";
import Globe from "../../../assets/icons/globe.svg";
import { ReactSVG } from "react-svg";

const CardTypography: Record<string, TypographyStyle> = {
  CardCaption: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "22px",
    fontWeight: 300,
  },
  CardCaptionBold: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
  },
  CardBody: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
  },
};

interface CompanyCardProps {
  companyName: string;
  companyImage: string;
  companyLink: string;
  companyDesc: string;
  role: string;
  team: string;
  office: string;
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
  return (
    <FlexBox className="company-card">
      <FlexBox className="company-card-wrapper" gap={100}>
        <FlexBox direction="column" justifyContent="space-between">
          <FlexBox
            gap={24}
            direction="column"
            justifyContent="space-between"
            height="100%"
          >
            <FlexBox gap={64} alignItems="center">
              <Image
                className="company-card-image"
                src={props.companyImage}
                maxWidth={60}
                maxHeight={60}
              />

              <Text
                text={props.companyName}
                margin={{ top: 0, bottom: 0 }}
                typography={CardTypography.CardCaptionBold}
                color={Colors.AluminorGray}
              />
            </FlexBox>
            <FlexBox direction="column">
              <Text
                text={props.companyDesc}
                typography={CardTypography.CardBody}
                color={Colors.TitaniumGray}
              />
            </FlexBox>
            <LinkWithImage url={props.companyLink} text="Website" img={Globe} />
          </FlexBox>
        </FlexBox>
        <VerticalDivider />
        <FlexBox
          direction="column"
          justifyContent="center"
          height="100%"
          minWidth="30%"
          gap={24}
        >
          <FlexBox direction="column">
            <Text
              text="Role"
              typography={CardTypography.CardCaptionBold}
              color={Colors.BackgroundSecondary}
              margin={{ top: 0, bottom: 0 }}
            />
            <Text
              text={props.role}
              typography={CardTypography.CardCaption}
              color={Colors.BackgroundSecondary}
              margin={{ top: 0, bottom: 0 }}
            />
          </FlexBox>
          <FlexBox direction="column">
            <Text
              text="Team"
              typography={CardTypography.CardCaptionBold}
              color={Colors.BackgroundSecondary}
              width={80}
              margin={{ top: 0, bottom: 0 }}
            />
            <Text
              text={props.team}
              typography={CardTypography.CardCaption}
              color={Colors.BackgroundSecondary}
              margin={{ top: 0, bottom: 0 }}
            />
          </FlexBox>
          <FlexBox direction="column">
            <Text
              text="Office"
              typography={CardTypography.CardCaptionBold}
              color={Colors.BackgroundSecondary}
              width={80}
              margin={{ top: 0, bottom: 0 }}
            />
            <Text
              text={props.office}
              typography={CardTypography.CardCaption}
              color={Colors.BackgroundSecondary}
              margin={{ top: 0, bottom: 0 }}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

function VerticalDivider() {
  return <div className="company-card-horizontal-divider" />;
}

interface LinkWithImageProps {
  url: string;
  text: string;
  img: string;
}

const LinkWithImage: FC<LinkWithImageProps> = (props) => {
  return (
    <FlexBox className="company-card-link-wrapper" alignItems="center">
      <p className="company-card-link link">
        <a href={props.url} target="_blank">
          {props.text}
        </a>
      </p>
      <ReactSVG
        className="company-card-link-img"
        src={props.img}
        style={{ height: 24, width: 24, display: "flex" }}
      />
    </FlexBox>
  );
};

export default CompanyCard;
