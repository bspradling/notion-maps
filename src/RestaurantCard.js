import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
React.useLayoutEffect = React.useEffect

export default function RestaurantCard({restaurant}) {
    if (restaurant == null) {
        restaurant = {}
    }
  restaurant = (Object.keys(restaurant).length == 0) ? {
      "restaurant": {
      "properties": {
            "Name": {
                "title": [
                  { "plain_text": "" } 
                ] 
            },
            "Description": {
                "rich_text": [
                    { "plain_text": "" }
                ]
            },
            "Featured On": {
                "select": {
                    "name": ""
                }
            },
            "Tags": {
                "multi_select": []
            }
      },
      "url": ""
  }}: restaurant;

  console.log(restaurant)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {restaurant.restaurant.properties.Name.title[0].plain_text || ""}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {restaurant.restaurant.properties['Featured On'].select.name}
        </Typography>
        <Typography variant="body2">
          {restaurant.restaurant.properties.Description.rich_text[0].plain_text}
        </Typography>
      </CardContent>
      {restaurant.restaurant.properties.Tags.multi_select.map(tag => <Chip label={tag.name} />)}
      <CardActions>
        <Button href={restaurant.restaurant.url} size="small">View in Notion</Button>
        <Button href={restaurant.restaurant.url} size="small">Website</Button>
      </CardActions>
    </Card>
  );
}