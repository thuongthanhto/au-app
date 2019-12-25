import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Linking } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Responsive from '../../modules/utils/responsive';

const WhichOutletsScreen = () => {

  const ItemMenu = ({ column1, column2, column3 = {}}) => (
    <View style={[styles.itemMenuRow, styles.paddingLine]}>
      <View style={styles.itemColumn}>
        <Text style={styles.titleItemMenu}>{column1.title}</Text>
        <Text style={styles.contentItemMenu}>{column1.content}</Text>
      </View>
      <View style={styles.itemColumn}>
        <Text style={styles.titleItemMenu}>{column2.title}</Text>
        <Text style={styles.contentItemMenu}>{column2.content}</Text>
        {!!column3.title && <Text style={[styles.titleItemMenu, styles.paddingLine]}>{column3.title}</Text>}
        {!!column3.title && <Text style={styles.contentItemMenu}>{column3.content}</Text>}
      </View>
    </View>
  );

  const ItemList = ({ content,isPaddingTop }) => (
    <View style={[styles.flexRow, isPaddingTop && styles.paddingLine]}>
      <EntypoIcon name="dot-single" size={Responsive.h(20)} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <ScrollView>
        <View style={styles.bodyWhichOutlets}>
          <Text style={styles.title}>Which Outlets?</Text>
          <Text style={styles.content}>
            {'The NSW laws apply to larger \'fast\' and snack food chains and supermarkets selling selected ready-to-eat foods. \n\'Fast\' food chains - You will find menu items from larger \'fast\' food chains in our database if the chain has:'}
          </Text>
          <ItemList content="20 or more outlets in NSW, or" isPaddingTop />
          <ItemList content="50 or more outlets in Australia" />
          <Text style={[styles.content, styles.paddingLine]}>
            Smaller chains and supermarkets with fewer outlets are not included, but may volunteer to display the information for their customers. Single outlet businesses are also not included.
          </Text>
          <Text style={[styles.content, styles.paddingLine]}>
            Businesses that need to display kJ values on their menus include:
          </Text>
          <ItemMenu
            column1={{
              title: 'Burger chains',
              content: `Hungry Jack's\nGrilld\nMcDonalds, incl. McCafe`
            }}
            column2={{
              title: 'Bakery product, cake chains',
              content: `Baker's Delight\nBreadtop\nBrumby's\nPie Face\nThe Cheesecake Shop`
            }}
          />
          <ItemMenu
            column1={{
              title: 'Chicken chains',
              content: `Country Chicken\nKFC\nNando's\nOporto\nRed Lea\nRed Rooster`
            }}
            column2={{
              title: 'Coffee, caf chains',
              content: `Gloria Jean's\nJamaica Blue\nMichel's Patisserie\nMuffin Break\nThe Coffee Club: Club, Kiosk\nWild Bean Caf\nZarraffa's Coffee`
            }}
          />
          <ItemMenu
            column1={{
              title: 'Donut chains',
              content: `Donut King`
            }}
            column2={{
              title: 'Icecream chains',
              content: `Baskin Robbins\nCold Rocks Ice Creamery\nNew Zealand Natural\nWendy's`
            }}
          />
          <ItemMenu
            column1={{
              title: 'Juice, cold drink chains',
              content: `Boost Juice\nChatime\nEasy Way`
            }}
            column2={{
              title: 'Kebab, grill chains',
              content: `Ali Baba`
            }}
            column3={{
              title: 'Noodle, stir fry, sushi chains',
              content: `Noodle Box`
            }}
          />
          <ItemMenu
            column1={{
              title: 'Pizza, pasta, Italian chains',
              content: `Crust Gourmet Pizza Bar\nDomino's\nEagle Boys Pizza\nLa Porchetta\nPizza Capers\nPizza Hut`
            }}
            column2={{
              title: 'Salad bar chains',
              content: `Sumo Salad`
            }}
            column3={{
              title: 'Sandwich chains',
              content: `Subway`
            }}
          />
          <Text style={[styles.content, styles.paddingLine]}>This list will change from time to time and may not be current. We regularly review the list.</Text>
          <Text style={[styles.subTitle, styles.paddingLine]}>Exemptions</Text>
          <Text style={[styles.content, styles.paddingLine]}>Even if they meet the other criteria, some chains of food outlets are exempt, including:</Text>
          <ItemList content="convenience stores" isPaddingTop />
          <ItemList content="service stations selling petrol or other fuel" />
          <ItemList content="catering chains" />
          <ItemList content="chains that only sell food intended to be consumed on the premises, and" />
          <ItemList content="retail outlets at health care facilities." />
          <Text style={[styles.content, styles.paddingLine]} onPress={() => Linking.openURL('http://www.8700.com.au/nsw-laws')}>
            Go to <Text style={[styles.content, {color: '#00AAEA'}]}>8700.com.au/nsw-laws</Text>
          </Text>
          <Text style={[styles.subTitle, styles.paddingLine]}>Supermarkets</Text>
          <Text style={[styles.content, styles.paddingLine]}>
            As of 13 February 2013, Coles, Woolworths and IGA Supermarkets will carry kJ values, as well as for ready-to-eat foods like hot chickens, salads, some cakes and bakery items. You will find this kJ information alongside the product description and price on the shelf and on the product itself.  
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WhichOutletsScreen;
